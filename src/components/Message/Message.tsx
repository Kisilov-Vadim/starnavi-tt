import React, { ReactElement, memo } from 'react'
import { useSelector } from 'react-redux';


export default memo(function Message(): ReactElement {
  const {message, color} = useSelector((state:any) => state.alert_message);
  
  return (
    <div className="game-field_congrats">
      <span style={{ color }}>{message}</span>
    </div>
  )
})

