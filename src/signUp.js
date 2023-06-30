import React, { useRef } from 'react'

export default function SignUp() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
  return (
<div className='container'>
    <div className='input_space'>
     <input placeholder='name' type='text' ref={name} />
    </div>
    <div className='input_space'>
     <input placeholder='email' type='text' ref={email} />
    </div>
    <div className='input_space'>
     <input placeholder='password' type='password' ref={password} />
    </div>
</div>
  );
}

