import {
  ButtonInterface,
  CheckboxInterface,
  IntegerInterface,
  Node,
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
    const category = data.categories !== undefined && data.categories.length > 0 ? data.categories.at(0) : "undefined"
    nodes.push({node: node, category: category})
  }
  return nodes
}
function createNodeType(name: string, nodeData: INode) {
  const inputs: object = {}
  if(nodeData.parameters !== undefined) {
    for (const [paramName, paramData] of Object.entries(nodeData.parameters)) {
      switch (paramData.type) {
        case "string":
          if (paramData.enum !== undefined) {
            inputs[paramName] = new SelectInterface(paramName, paramData.default, paramData.enum).setPort(false)
          } else {
            inputs[paramName] = new TextInputInterface(paramName, paramData.default).setPort(false)
          }
          break;
        case "number":
          if (paramData.format === "integer") {
            inputs[paramName] = new IntegerInterface(paramName, paramData.default).setPort(false)
          } else if (paramData.format === "float") {
            inputs[paramName] = new NumberInterface(paramName, paramData.default).setPort(false)
          }
          break;
        case "boolean":
          inputs[paramName] = new CheckboxInterface(paramName, paramData.default).setPort(false)
          break;
      }
    }
  }
  inputs["Input"] = new NodeInterface("Input", 0)
  inputs["Description"] = new ButtonInterface("Description", () => console.log("Description"))

  const outputs = {
    "Output": new NodeInterface("Output", 0)
  }

  return class extends Node<any, any> {
    private title = name
    private type = name
    private inputs = inputs
    private outputs = outputs
    constructor() {
      super();
      this.title = name
      this.type = name
      this.inputs = inputs
      this.outputs = outputs
      this.initializeIo();
    }
  }
}
