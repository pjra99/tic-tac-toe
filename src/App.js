import './App.css';
import {useState, useEffect} from 'react'
function App() {

  const [cellValue, setCellValue] = useState([])
  const [clickCount, setClickCount] = useState(-1)
  const [isTapped, setIsTapped] = useState([])

 useEffect(()=>{

  if(cellValue[0]==="X" && cellValue[3]==="X" && cellValue[6]==="X" ||
   cellValue[1]==="X" && cellValue[4]==="X" && cellValue[7]==="X" ||
   cellValue[2]==="X" && cellValue[5]==="X" && cellValue[8]==="X" ||
   cellValue[0]==="X" && cellValue[1]==="X" && cellValue[2]==="X" ||
   cellValue[3]==="X" && cellValue[4]==="X" && cellValue[5]==="X" ||
   cellValue[6]==="X" && cellValue[7]==="X" && cellValue[8]==="X" ||
   cellValue[0]==="X" && cellValue[4]==="X" && cellValue[8]==="X" ||
   cellValue[2]==="X" && cellValue[4]==="X" && cellValue[6]==="X"
   ) {
    alert("Player 1 Won")
   }

   if(cellValue[0]==="O" && cellValue[3]==="O" && cellValue[6]==="O" ||
   cellValue[1]==="O" && cellValue[4]==="O" && cellValue[7]==="O" ||
   cellValue[2]==="O" && cellValue[5]==="O" && cellValue[8]==="O" ||
   cellValue[0]==="O" && cellValue[1]==="O" && cellValue[2]==="O" ||
   cellValue[3]==="O" && cellValue[4]==="O" && cellValue[5]==="O" ||
   cellValue[6]==="O" && cellValue[7]==="O" && cellValue[8]==="O" ||
   cellValue[0]==="O" && cellValue[4]==="O" && cellValue[8]==="O" ||
   cellValue[2]==="O" && cellValue[4]==="O" && cellValue[6]==="O"
   ) {
    alert("Player 1 Won")
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
    <div className="App container">
     <div className="row">
       <div className="col-md-2"></div>
       <div className="col-md-8 game-box-col">
       <div className="game-box">
     <div className="grid-row">
      <div className="cell" onClick={()=>handleClick(0)}>{cellValue[0]}</div>
     <div className="cell" onClick={()=>handleClick(1)}>{cellValue[1]}</div>
     <div className="cell" onClick={()=>handleClick(2)}>{cellValue[2]}</div>
     </div>
     <div className="grid-row">
       <div className="cell" onClick={()=>handleClick(3)}>{cellValue[3]}</div>
     <div className="cell" onClick={()=>handleClick(4)}>{cellValue[4]}</div>
     <div className="cell" onClick={()=>handleClick(5)}>{cellValue[5]}</div>
     </div>
     <div className="grid-row">
       <div className="cell" onClick={()=>handleClick(6)}>{cellValue[6]}</div>
     <div className="cell" onClick={()=>handleClick(7)}>{cellValue[7]}</div>
     <div className="cell" onClick={()=>handleClick(8)}>{cellValue[8]}</div>
     </div>
     </div>
       </div>
       <div className="col-md-2"></div>
     </div>
    </div>
  );
}

export default App;
