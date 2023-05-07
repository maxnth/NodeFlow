function hasInputNode(graph) {
  for(const node of graph.nodes){
    if(node.type === "InputNode") return node.id
  }
  return ""
}

function flatMapToTree(flatMap){
  const nodes = [];
  const toplevelNodes = [];
  const lookupList = {};

  for (let i = 0; i < flatMap.length; i++) {
    const n = {
      id: flatMap[i].id,
      name: flatMap[i].name,
      parent_id: ((flatMap[i].parent === 0) ? null : flatMap[i].parent),
      children: []
    };
    lookupList[n.id] = n;
    nodes.push(n);
    if (n.parent_id == null) {
      toplevelNodes.push(n);
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (!(n.parent_id == null)) {
      lookupList[n.parent_id].children = lookupList[n.parent_id].children.concat([n]);
    }
  }
  return toplevelNodes[0]
}

function traverseTree(tree, nodeMap){
  function iter(o, p)  {
    if(o.children){
      o.children.forEach(function (k){
        iter(k, p.concat(nodeMap.get(k.id)))
      })
    }
    if(o.children.length === 0){
      result.push(p)
    }
  }

  const result = [];
  iter(tree, []);
  return result;
}

function filterFlatMap(flatMap, idNameMap){
  // Removes all connections which contain non input root nodes
  const nonInputRootNodes = new Map(idNameMap)
  for(const entry of flatMap){
    nonInputRootNodes.delete(entry.id)
  }
  const filteredNodes = Array.from(nonInputRootNodes.keys())
  const filteredFlatMap = []
  for(const entry of flatMap){
    if(filteredNodes.indexOf(entry.parent) === -1) filteredFlatMap.push(entry)
  }
  return filteredFlatMap
}

function buildExportString(processString, mode) {
  switch(mode){
    case "external":
      return [
        "docker",
        "run",
        "--rm",
        "-u",
        "$(id -u)",
        "-v",
        "$PWD:/data",
        "-w",
        "/data",
        "--",
        "ocrd/all:maximum"].concat(processString).join(" ")
    case "internal":
      return processString.join(" ")
  }
}

function buildProcessStringFromPaths(paths){
  const reservedNames = ["Description", "Input", "Output"]
  const call = [
    "ocrd",
    "process"
  ]
  for(const [pathIndex, path] of paths.entries()){
    let latestOutput = ""
    for(const [processorIndex, processor] of path.entries()){
      const processorCall = []

      processorCall.push(`${processor.type}`.replace(/^(ocrd-)/,""))

      processorCall.push("-I")
      latestOutput === "" ? processorCall.push("OCR-D-IMG") : processorCall.push(latestOutput)
      processorCall.push("-O")
      const outputName = `P${pathIndex}_${processor.type}_${processorIndex}`
      processorCall.push(outputName)
      latestOutput = outputName

      for(const [key, value] of Object.entries(processor.inputs)){
        if(reservedNames.indexOf(key) === -1){
          if(value.value){
            processorCall.push("-P")
            processorCall.push(key)
            processorCall.push(value.value)
          }
        }
      }
      call.push("'" + processorCall.join(" ") + "'")
    }
  }
  return call
}

export function exportWorkflow(state, mode){
  const graph = state.graph
  const inputNode = hasInputNode(graph)
  if(!inputNode){
    return false
  }

  const connectionNodeMap = new Map()
  const nodeMap = new Map()

  for(const node of graph.nodes){
    nodeMap.set(node.id, node)
    for(const [key, value] of Object.entries(node.inputs)){
      connectionNodeMap.set(value.id, node.id)
    }
    for(const [key, value] of Object.entries(node.outputs)){
      connectionNodeMap.set(value.id, node.id)
    }
  }

  const flatMap= []
  flatMap.push({
    id: inputNode,
    name: inputNode,
    parent: 0
  })

  for(const connection of graph.connections){
    const fromNode = connectionNodeMap.get(connection.from)
    const toNode = connectionNodeMap.get(connection.to)

    flatMap.push({
      id: toNode,
      name: toNode,
      parent: fromNode
    })

  }

  const filteredFlatMap = filterFlatMap(flatMap, nodeMap)

  const tree = flatMapToTree(filteredFlatMap)
  const paths = traverseTree(tree, nodeMap)
  const processString = buildProcessStringFromPaths(paths)
  return buildExportString(processString, mode)
}
