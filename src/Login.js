import React from 'react'

export const Login = () => {
  return (
    <>
    
    {
      user ? (
    <>

     <Header photoURL={user.photoURL}/>
    <div className="App">
      
    <Sidebar/>
    <Data/>
  
    </div>
    </>    
      ):(
    
        <div className="LoginWrap">

          <img  className="imgm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3MkXpoxqoP29f5WdwjW2H9oOh6wv4hbHYQ&usqp=CAU" alt="Error  404"/>
          <button className='buttt' onClick={signIn}><b>Login to VippyDrive</b></button>

          <  GitHubIcon/>     
         
  
    <a href="https://github.com/mankotia412vishal"inputMode="text">Github</a>
<span></span>
        </div>
      )
    }
    
    </>




  )
}
export default Login;