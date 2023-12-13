import React from 'react'
import { Circle } from 'rc-progress';

function ProgressBar(props) {
  const {percent,skillname} = props
  
  return (
    <div className='progressbar'>
      <Circle
       percent={percent}
       strokeColor="rgba(153,45,117,1)"
       strokeWidth={11}
       trailColor='white'
       trailWidth={10}
       strokeLinecap='round'
       className='circlebar'
       >40%</Circle>
<h4 className='skillsname'>{skillname}</h4>
    </div>
  )
}

export default ProgressBar
