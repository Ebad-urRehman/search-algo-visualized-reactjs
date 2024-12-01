import { delay, findReminder } from "./helper"

export function ApplyAlgoButton({visitedNodes, setBackgroundColor, size, setNodeCounter}) {
    async function showNodesColor() {
            for (let node of visitedNodes) {
                setBackgroundColor((prevBackgroundColor) => {
                    let newBackGroundColor = [...prevBackgroundColor]
                    console.log('=>', newBackGroundColor)
                    newBackGroundColor[(node[0]*size) + findReminder(10, node[2])] = 'green'
                    console.log(node, newBackGroundColor[`${node[0]*size} + ${findReminder(node[1], 10)}`])
                    return newBackGroundColor
                })
                setNodeCounter((prevCount) => prevCount+=1)
                await delay(500)
            }
    }

    return <div className="apply-algo-button">
        <button onClick={() => showNodesColor()}>Apply BFS</button>
    </div>
}

