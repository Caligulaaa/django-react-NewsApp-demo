import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../API/PostService'
import { AuthContext } from '../utils/context'



const LoginPage = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()


  const loginUser = async (e) => {
    e.preventDefault()
    const userToken = await PostService.postLogin(e.target.username.value,e.target.password.value)

    console.log(userToken.data.auth_token)

    if(userToken.status === 200){
      setIsAuth(userToken.data.auth_token)
      localStorage.setItem('authToken',JSON.stringify(userToken.data.auth_token))
      navigate('/')
    }   

  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name='username' placeholder='Enter Username'/>
        <br />
        <input type="password" name='password' placeholder='Enter Password'/>
        <br />
        <button>login</button>

      </form>
    </div>
  )
}

export default LoginPage