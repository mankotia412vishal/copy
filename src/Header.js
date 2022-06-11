import React from 'react'
import './CSS/header.css'
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';


  
function Header({photoURL}) {
  return (
    <div className='header'>
       <div className='header__logo'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3MkXpoxqoP29f5WdwjW2H9oOh6wv4hbHYQ&usqp=CAU" alt="Error  404"/>
      <span>VippyDrive</span>
       </div>
       <div className='header__search'>
            <SearchIcon/>
            <input  type="text" placeholder='Search in Drive'/>
            <FormatAlignCenterIcon/>
       </div>
       <div className='header__icons'>
<span>
    <HelpIcon/>
    <SettingsIcon/>
</span>
<span>
<AppsIcon/>
<Avatar src={photoURL}/>

</span>
       </div>
        


    </div>
  )
}

export default Header