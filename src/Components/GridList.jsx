import {findReminder} from './helper.jsx'
const DivList = ({backgroundColor, setBackgroundColor, size, gridList}) => {
    const divs = []
  
    const changeBackgroundColor = (index) => {
      const newBackgroundColors = [...backgroundColor]
      newBackgroundColors[index] = backgroundColor[index] == 'green' ? 'red' : 'green'
      setBackgroundColor(newBackgroundColors)
    }
  
    for (let i=0; i<size*size; i++) {
      divs.push(
        <div key={i} className='box'
        style={{backgroundColor: backgroundColor[i]}}
        onClick={() => changeBackgroundColor(i)}
        >
          {gridList[parseInt(i/size)][findReminder(10,i)] == 'A'?'Start':null}
          {gridList[parseInt(i/size)][findReminder(10,i)] == 'B'?'End':null}
        </div>
      )
    }
    return divs 
  }

  export default DivList