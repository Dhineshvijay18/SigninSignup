import React,{useState,useEffect,useRef} from 'react'
import SignUp from './signUp'
import LogIn from './login'
import Home from './Home'

export default function App() { 
  const name=useRef()
  const email=useRef()
  const password=useRef()
  const [showHome,setShowHome]=useState(false)
  const [show,setShow]=useState(false)  
  const localSignUp=localStorage.getItem("signUp")
  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")
  const localName=localStorage.getItem("name")
  useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   },[])
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
  return (
   <div>
    {showHome?<Home/>:(
      show?<div>
              <div className='input_space'>
     <input placeholder='email' type='text' ref={email} />
    </div>
    <div className='input_space'>
     <input placeholder='password' type='password' ref={password} />
    </div>
        <button onClick={handleSignIn}>SignIn</button>
        </div>
        :
        <div>
    <div className='input_space'>
     <input placeholder='name' type='text' ref={name} />
    </div>
    <div className='input_space'>
     <input placeholder='email' type='text' ref={email} />
    </div>
    <div className='input_space'>
     <input placeholder='password' type='password' ref={password} />
    </div>
        <button onClick={handleClick}>SignUp</button>
        </div>
    )
    }  </div>   
  )
}
