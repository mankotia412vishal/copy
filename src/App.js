import { user,useState } from "react"   ;
import Data  from "./Data";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
// import {FaGithub} from "react-icons/fa";
// import { auth } from "./firebase";
import { auth, provider } from "./firebase";
import Header  from "./Header";
import Sidebar  from "./Sidebar";
import  Navbar from "./Navbar";
// import Login from "./Login";
function App() {
  
  const[user,setUser]=useState(null)
 const  signIn=()=>{
  auth.signInWithPopup(provider).then(({user})=>{
    setUser(user)
  })
  .catch(error=>{
    alert(error.message)
  })
 }
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
      
      );
    
    }
   
export default App;
