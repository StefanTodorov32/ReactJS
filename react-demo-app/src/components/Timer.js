import React, { useState } from 'react'

export const Timer = (props) => {
      const [seconds, setSeconds] = useState(0)
      const [timeoutSeconds, setTimeoutSeconds] = useState(1000)
      setTimeout(()=>{
            setSeconds(seconds + 1)
      }, timeoutSeconds)
      setTimeout(()=>{
            setTimeoutSeconds((timeoutSeconds) => timeoutSeconds - 10)
      }, 1000)
      return (
            <div>
                  <h1>Title</h1>
                  {seconds}
                  {timeoutSeconds}
            </div>
      )
}
