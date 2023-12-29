import React from 'react'
import Display from '../components/Display'
import Input from '../components/Input'
import useHandleChange from '../hooks/useHandleChange';

function Type() {
  const { handleChange,content } = useHandleChange();

  return (
    <div className='type'>
      <Display content={content}/>
      <Input handleChange={handleChange}/>
    </div>
  )
}

export default Type
