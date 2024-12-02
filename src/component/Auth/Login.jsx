import React, { useState } from 'react'

const Login = ({handleLogin}) => {
const [email, setEmail] =useState('');
const [password, setPassword] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")


  }
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl '>
        <form  onSubmit={(e)=>{
          submitHandler(e)
          console.log("email ",email);
          console.log("password ",password);

          
          }} 
          className='flex flex-col items-center justify-center'>
          <input value={email}
          onChange={(e)=> {
            setEmail(e.target.value);


          }} 
          reqired className='  text-xl py-2  px-2 outline-none bg-transparent  border-2 border-emerald-600 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input  value={password}
          onChange={(e)=> {
            setPassword(e.target.value);

          }}
          required className=' text-xl  mt-3 py-2 px-2 outline-none bg-transparent border-2 border-emerald-600 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button className='text-white border-none bg-emerald-600 rounded-full text-xl px-2 mt-4 py-2 w-full'>Login</button>

        </form>

      </div>

    </div>
  )
}

export default Login