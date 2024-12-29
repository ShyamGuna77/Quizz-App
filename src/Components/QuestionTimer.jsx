import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
      console.log("1st");
  const timerr = setTimeout(onTimeout,timeout);
     return () => {
      clearTimeout(timerr);
     }
      
    },[onTimeout,timeout])

    useEffect(() => {
      console.log("@2nd");

    const interval =  setInterval(() =>{
        setRemainingTime(prevTime => prevTime-100)
      },100)
      return () => {
        clearInterval(interval);
      }

    },[])



  return <div>
  <progress id="question-timer" max={timeout} value={remainingTime}  />
  </div>;
}
