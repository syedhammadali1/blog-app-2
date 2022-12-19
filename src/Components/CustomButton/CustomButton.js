import { Button } from 'antd';
import React from 'react'

export const CustomButton = (props) => {
    // console.log({...props});
  return (
    <div>
        <Button {...props}>{props?.children}</Button>
    </div>
  )
}
