import { useState } from 'react';
import './App.css';
import Header from './component/Header';
// import Header from './component/Header';


//////////////////////props

  

// function App() {


//   const getValue=(num)=>{
//     console.log(num)
// }

//   let text='Hi Hi';

//   let arra=[1,2,3,4,5]
//   return (
//     <div className="App">
//      <h1>hello I am App</h1>
//      <Header text={text} arr={arra} getValue={getValue}/>
//     </div>
//   );
// }



///////////////////// hooks

function App(){

const [counter,setCounter]=useState(0)
const [color,setColor]=useState(false)
const [clicked,setClicked]=useState('')



  return(
    <div 
    className='app'
    style={{
      background: color ? 'red' : "white"
    }}>
      <h1>{counter}</h1>
      <button 
      style={{
        background:clicked==="clicked+" ? 'yellow' : 'white'
      }}
      onClick={()=>{
        setCounter(counter+1)
        setClicked('clicked+')
      }}
      >increment</button>

      <button 
      style={{
        background:clicked==="clicked-" ? 'yellow' : 'white'
      }}
      onClick={()=>{
        setCounter(counter-1)
        setClicked('clicked-')
      }}
      >decriment</button>
<br/>

      <button onClick={()=>setColor(true)}>on</button>
      
      <button onClick={()=>setColor(false)}>off</button>

      <Header counter={counter}/>
    </div>
  )
}










export default App;
