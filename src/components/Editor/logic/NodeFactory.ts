import {
  allowMultipleConnections,
  ButtonInterface,
  CheckboxInterface,
  IntegerInterface,
  defineNode,
  NodeInterface,
  NumberInterface,
  SelectInterface,
  TextInputInterface
} from "baklavajs";

interface INode {
  categories: string[]
  parameters: IParameter[]
}

interface IParameter {
  type: string
  enum: string[]
  format: string
  default: any
}

export function constructNodesFromFile(): Promise<object[]> {
  const url = `data/ocrd-all-tool.json`

  return fetch(url)
    .then(
      (response: Response) => response.json()
    ).then(
      (data) => constructNodes(data)
    )
}

function constructNodes(nodeData: object){
  const nodes: object[] = []
  for(const [name, data] of Object.entries(nodeData)){
    const node = createNodeType(name, data)
    const category = data.categories !== undefined && data.categories.length > 0 ? data.categories.at(0) : "Undefined"
    nodes.push({node: node, category: category})
  }
  return nodes
}
function createNodeType(name: string, nodeData: INode) {
  const inputs: {[index: string]: any} = {}
  if(nodeData.parameters !== undefined) {
    for (const [paramName, paramData] of Object.entries(nodeData.parameters)) {
      switch (paramData.type) {
        case "string":
          if (paramData.enum !== undefined) {
            inputs[paramName] = () => new SelectInterface(paramName, paramData.default, paramData.enum).setPort(false).use(allowMultipleConnections)
          } else {
            inputs[paramName] = () => new TextInputInterface(paramName, paramData.default).setPort(false)
          }
          break;
        case "number":
          if (paramData.format === "integer") {
            inputs[paramName] = () => new IntegerInterface(paramName, paramData.default).setPort(false)
          } else if (paramData.format === "float") {
            inputs[paramName] = () => new NumberInterface(paramName, paramData.default).setPort(false)
          }
          break;
        case "boolean":
          inputs[paramName] = () => new CheckboxInterface(paramName, paramData.default).setPort(false)
          break;
      }
    }
  }
  inputs["Input"] = () => new NodeInterface("Input", 0)
  inputs["Description"] = () => new ButtonInterface("Description", () => console.log("Description"))

  const outputs = {
    "Output": () => new NodeInterface("Output", 0)
  }

  return defineNode({
    type: name,
    inputs: inputs,
    outputs: outputs,
  })
}
