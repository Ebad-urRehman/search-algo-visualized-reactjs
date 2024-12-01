import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DivList from './Components/GridList'
import GridNumberSelector from './Components/GridNumberSelector'
import { defaultGrid } from './Components/DefaultGrid'
import BFS from './Components/BFS'
import { ApplyAlgoButton } from './Components/ApplyAlgoButton'


function App() {
  const gridList = defaultGrid.split('\n').filter(row => row).map(row => row.split(''))
  console.log(gridList)

  const [size, setSize] = useState(10)
  let colorGrid = [Array(size*size).fill('grey')]
  console.log('colorgrid', colorGrid)
  // building the color array
  for(let row in gridList) {
    for(let element in gridList[row]) {
      let index = parseInt(row) * size + parseInt(element)
      if(gridList[row][element]=='#') {colorGrid[index] = 'rgb(70, 52, 52)'}
      else if(gridList[row][element]=='A') {
        colorGrid[index] = 'blue' 
        var start = [parseInt(row), parseInt(element)]
      }
      else if(gridList[row][element]=='B') {
        colorGrid[index] = 'red'
        var end = [parseInt(row), parseInt(element)]
      }
      else if(gridList[row][element]==' ') {colorGrid[index] = 'grey'}
    }
  }
  let visitedNodes = BFS(start, end, size, gridList)
  console.log('visited nodes', visitedNodes)

  const [backgroundColor, setBackgroundColor] = useState(colorGrid)
  const [nodeCounter, setNodeCounter] = useState(0)
  return (
    
    <>
      <div className='main-app'>
          <div className='grid' 
            style={{gridTemplateColumns:`repeat(${size}, calc(600px / ${size}))`,
            gridTemplateRows:`repeat(${size}, calc(600px / ${size}))`}}>
            <DivList backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} size={size} gridList={gridList}/>
          </div>
          {/* <GridNumberSelector size={size} setSize={setSize}/> */}
          <ApplyAlgoButton visitedNodes={visitedNodes} setBackgroundColor={setBackgroundColor} size={size} setNodeCounter={setNodeCounter}/>
          <div>Nodes Visited {nodeCounter}</div>
      </div>
    </>
  )
}

export default App
