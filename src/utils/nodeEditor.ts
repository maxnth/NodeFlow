import { IBaklavaViewModel } from "baklavajs";

export function addNodeWithCoordinates(baklava: IBaklavaViewModel, nodeType: any, x: number, y: number) {
  const n = new nodeType();
  baklava.displayedGraph.addNode(n);
  n.position.x = x;
  n.position.y = y;
  return n;
}
