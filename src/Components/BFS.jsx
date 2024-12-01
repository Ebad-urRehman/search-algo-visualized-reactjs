export default function BFS(start, end, size, grid) {
    let up = [-1, 0]
    let down = [1, 0]
    let left = [0, -1]
    let right = [0, 1]
    let queue = [start]
    let visitedNodes = new Set()
    visitedNodes.add(start.toString())

    let node = start
    while (queue.length > 0) {
        node = queue.shift()
        if(node[0] === end[0] && node[1] === end[1]) {
            return visitedNodes
        }
        
        let directions = [up, down, left, right]
        for(let direction of directions) {
        let neigbourNode = node.map((value, index) => value + direction[index])

        // checking if nodes are valid and adding into the queue
        if (neigbourNode[0] < size
            && neigbourNode[0] > 0
            && neigbourNode[1] < size
            && neigbourNode[1] > 0
            && !(visitedNodes.has(neigbourNode.toString()))
            && grid[neigbourNode[0]][neigbourNode[1]] !== '#') {
                queue.push(neigbourNode)
            visitedNodes.add(neigbourNode.toString())}
        }
    }
    return null
        
    }
