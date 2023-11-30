import dagre from 'dagre'

export interface GraphLayoutNode {
  [key: string]: unknown
  id: string
  width: number
  height: number
  x: number
  y: number
  children: GraphLayoutNode[]
}

export interface GraphLayoutEdge {
  source: GraphLayoutNode
  target: GraphLayoutNode
}

export class GraphLayout {

  static FromTree(tree: GraphLayoutNode): GraphLayout {
    const layout = new GraphLayout()
    const [nodes, edges] = layout._transformFormTree([tree])
    layout._setNodes(nodes)
    layout._setEdges(edges)
    return layout
  }

  static FromTrees(tree: GraphLayoutNode[]): GraphLayout {
    const layout = new GraphLayout()
    const [nodes, edges] = layout._transformFormTree(tree)
    layout._setNodes(nodes)
    layout._setEdges(edges)
    return layout
  }

  private _nodesMap: Map<string, GraphLayoutNode> = new Map()

  private _nodes: GraphLayoutNode[] = []

  private _edges: GraphLayoutEdge[] = []

  get nodes(): GraphLayoutNode[] {
    return this._nodes
  }

  get edges(): GraphLayoutEdge[] {
    return this._edges
  }

  private _setNodes(nodes: GraphLayoutNode[]) {
    nodes.forEach(node => this._nodesMap.set(node.id, node))
    this._nodes = nodes
  }

  private _setEdges(edges: GraphLayoutEdge[]) {
    this._edges = edges
  }

  layout(options: dagre.GraphLabel) {
    const graph = new dagre.graphlib.Graph()
    graph.setGraph(options)
    graph.setDefaultEdgeLabel(() => ({}))
    for (const node of this._nodesMap.values()) {
      graph.setNode(node.id, { width: node.width, height: node.height })
    }
    for (let i = 0;i < this._edges.length;i++) {
      const edge = this._edges[i]
      graph.setEdge(edge.source.id, edge.target.id)
    }
    dagre.layout(graph)
    graph.nodes().map(id => {
      const node = this._nodesMap.get(id)
      if (node) {
        const pos = graph.node(id)
        node.x = pos.x
        node.y = pos.y
      }
    })
  }

  private _transformFormTree(tree: GraphLayoutNode[], parent?: GraphLayoutNode): [GraphLayoutNode[], GraphLayoutEdge[]] {
    let nodes: GraphLayoutNode[] = []
    let edges: GraphLayoutEdge[] = []
    for (let i = 0;i < tree.length;i++) {
      const treeNode = tree[i]
      nodes.push(treeNode)
      if (parent) {
        edges.push({ source: parent, target: treeNode })
      }
      if (treeNode.children.length > 0) {
        const [subNodes, subEdges] = this._transformFormTree(treeNode.children, treeNode)
        nodes = [...nodes, ...subNodes]
        edges = [...edges, ...subEdges]
      }
    }
    return [nodes, edges]
  }
}