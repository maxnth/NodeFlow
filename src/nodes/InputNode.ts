// @ts-nocheck
import {ButtonInterface, Node, NodeInterface } from "baklavajs";
export default class InputNode extends Node<any, any> {
  public type = "InputNode";
  public title = "Input"

  public inputs = {
    "description": new ButtonInterface("Description", () => console.log("Description"))
  };

  public outputs = {
    "output": new NodeInterface("Output", 0),
  };

  public constructor() {
    super();
    this.initializeIo();
  }
}
