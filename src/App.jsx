import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import Header from './component/others/Header'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [user, setUser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState()

const [userData, setUserData] =useContext(AuthContext)


useEffect(()=>{
  
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  

},[userData])

 const handleLogin = (email, password)=>{
  if(email == 'admin@me.com' && password =='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    
  }
  else if (userData){
    const employee =userData.find((e)=> email == e.email && password == e.password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
  

    }
   
    
  }
  else{
    alert("Invalid cereditals")
  }

 }
 const data = useContext(AuthContext)
 console.log(data)
 



  return (
    <>
  {!user ? <Login handleLogin={handleLogin}/> :''}
  {user ==='admin' ? <AdminDashboard changeUser={setUser}/> : user =='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> :null}
  
   
    
    
     </> 
  )
}

export default App