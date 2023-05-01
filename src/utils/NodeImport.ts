import { NodeBuilder } from "@baklavajs/core";

function buildNodes(nodeData: object[]){
  const nodes: object[] = []
  for(const [name, data] of Object.entries(nodeData)){
    const node = new NodeBuilder(name)
    const parameter_description_map = {}

    node.setName(name)
    node.addInputInterface("Input")
    node.addOutputInterface("Output")

    if(data.parameters !== undefined){
      for(const [paramName, paramData] of Object.entries(data.parameters)){
        parameter_description_map[paramName] = paramData.description
        switch(paramData.type){
          case "string":
            if(paramData.enum !== undefined){
              node.addOption(paramName, "SelectOption", paramData.default, undefined, {items: paramData.enum})
            }else{
              node.addOption(paramName, "InputOption", paramData.default)
            }
            break;
          case "number":
            if(paramData.format === "integer"){
              node.addOption(paramName, "IntegerOption", paramData.default)
            }else if(paramData.format === "float"){
              node.addOption(paramName, "NumberOption", paramData.default)
            }
            break;
          case "boolean":
            node.addOption(paramName, "CheckboxOption", paramData.default)
            break;
        }
      }
    }

    node.addOption(
      "Description",
      "ButtonOption",
      () => ({
        description: data.description,
        parameter_descriptions: parameter_description_map
      }),
      "SidebarDescriptionOption"
    )

    const category = (data.categories !== undefined && data.categories.length > 0) ? data.categories[0] : "Undefined"
    nodes.push({"name": name, "interface": node.build(), "category": category})
  }
  return nodes
}
export function importNodesFromFile(): Promise<object[]> {
  const url = `data/ocrd-all-tool.json`

  return fetch(url)
    .then(
      (response: Response) => response.json()
    ).then(
      (data) => buildNodes(data)
    )
}
