import React, {useState, useEffect} from 'react'
import {Circle} from "rc-progress"
import "./Timmer.css"
const Timmer = () => {
  const [minute, setMinute] = useState(0)
  const [second ,setSecond] =useState(0)
  var timmer;
  useEffect(()=>{
    timmer= setInterval(()=>{
       setSecond(second+1);
       if (second===59){
           setSecond(0)
       }
     },1000)
     return ()=> clearInterval(timmer)
  })

  const increase =()=>{
    const totalSeconds = minute * 60 + second + 10;
    var newSecond = totalSeconds % 60;
    setSecond(newSecond);
  }
  const restart = ()=>{
    setMinute(0)
    setSecond(0)
  }

  return (
    
    <div className='timmer'>
      <div className='container'>
      <div style={{ position:"relative", marginTop:20,  height:140 ,width:140, marginLeft: 90 }}>
      <Circle  strokeWidth={4} percent={(( second) / 60) * 100} strokeColor="#085c98"   gapDegree={0}  trailWidth={4} />
      </div>
        <h1>{minute > 9 ? minute : '0'+minute}:{second>9 ? second :"0"+second}</h1>
       
        <div className='buttoncontainer'>
            <button onClick={increase}>10 Sec</button>
            <button onClick={restart}>skip</button>
        </div>
      </div>
    </div>
  
  )
}
export default Timmer
