const GridNumberSelector = ({size, setSize}) => {
    return <div 
    className='input-box-div' 
    >
      <input className='input-box-grid-number' type='range' min='10' max='40' onChange={(e)=>setSize(e.target.value)}>
      </input>
    </div>
  }

  export default GridNumberSelector