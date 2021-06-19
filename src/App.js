import './App.css';
import {useState, useEffect} from 'react'
function App() {

  const [cellValue, setCellValue] = useState([])
  const [clickCount, setClickCount] = useState(-1)
  const [isTapped, setIsTapped] = useState([])

 useEffect(()=>{

  let sum1=0;
  let sum2=0;

  for(let i=0; i<9; i++){
    if(cellValue[i]==="X"){
      sum1+=i;
    }
    if(cellValue[i]==="O"){
      sum2+=i;
    }
  }
  let sum= sum1>sum2? sum1: sum2
 
  if(sum===3 || sum===9 || sum===12 || sum===15 || sum===21){
    sum1>sum2? alert("Player 1 Won!"): alert("Player 2 Won!")
  }
 }, [cellValue])

  function handleClick(cellNum){
    if(clickCount===8){
      alert("Game Over")
      return false;
    }
    setClickCount(clickCount+1)
    if(clickCount===0){
      let tap = []
      let response = []
      for(let i=0; i<9; i++){
        tap[i]=0;
        response[i]=""
      }
      setCellValue(response)
      setIsTapped(tap)
    }
      
    console.log(isTapped[0])

   if(isTapped[cellNum]===1){
     return;
   }

    let arr = [...cellValue]
    arr[cellNum] = clickCount%2===0? "X": "O"
    setCellValue(arr)
   
    let ar = [...isTapped]
    ar[cellNum]=1;
    setIsTapped(ar)
    
  

  }

  return (
    <div className="App">
      <div className="game-box">
     <div className="row"><div className="cell" onClick={()=>handleClick(0)}>{cellValue[0]}</div><div className="cell" onClick={()=>handleClick(1)}>{cellValue[1]}</div><div className="cell" onClick={()=>handleClick(2)}>{cellValue[2]}</div></div>
     <div className="row"><div className="cell" onClick={()=>handleClick(3)}>{cellValue[3]}</div><div className="cell" onClick={()=>handleClick(4)}>{cellValue[4]}</div><div className="cell" onClick={()=>handleClick(5)}>{cellValue[5]}</div></div>
     <div className="row"><div className="cell" onClick={()=>handleClick(6)}>{cellValue[6]}</div><div className="cell" onClick={()=>handleClick(7)}>{cellValue[7]}</div><div className="cell" onClick={()=>handleClick(8)}>{cellValue[8]}</div></div>
     </div>
    </div>
  );
}

export default App;
