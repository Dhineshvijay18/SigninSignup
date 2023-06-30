import React, { useRef } from 'react'

export default function LogIn() {
   const email = useRef();
    const password = useRef();
  return (
<div className='container'>
        <div className='input_space'>
     <input placeholder='email' type='text' ref={email} />
    </div>
    <div className='input_space'>
     <input placeholder='password' type='password' ref={password} />
    </div>
</div>
  );
}

