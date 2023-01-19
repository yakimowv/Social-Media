import './Leftbar.scss'
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import Logout from "../../assets/14.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Leftbar() {
  const {currentUser, logout}=useContext(AuthContext)
  const [err,setErr]= useState(null)


  
  const logoutHandler = async(e)=>{
    e.preventDefault()
    try{
       await logout()
    }catch(err){
      setErr(err.response.data);
    }
    console.log(err)
  }
  return (
    <div className='leftbar'>
      <div className="container">
        <div className='menu'>
          <div className='user'>
            <img src={"/upload/"+currentUser.profilePicture} alt='profile' />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img src={Friends} alt='Friends' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={Groups} alt='Groups' />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src={Market} alt='MarketPlace' />
            <span>MarketPlace</span>
          </div>
          <div className='item'>
            <img src={Watch} alt='Watch' />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src={Memories} alt='Memories' />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className='item'>
            <img src={Events} alt='Events' />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={Gaming} alt='Gaming' />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={Gallery} alt='Gallery' />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src={Videos} alt='Videos' />
            <span>Videos</span>
          </div>
          <div className='item'>
            <img src={Messages} alt='Messages' />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>
        <div className='item'>
            <img src={Fund} alt='Fund' />
            <span>Fundralser</span>
          </div>
          <div className='item'>
            <img src={Tutorials} alt='Tutorials' />
            <span>Tutorials</span>
          </div>
          <div className='item'>
            <img src={Courses} alt='Courses' />
            <span>Courses</span>
          </div>
        </div>
        <hr/>
        <div className='logout'>
            <img src={Logout} alt='Logout' />
            <Link to={'/login'} style={{textDecoration:'none'}}>
            <span onClick={logoutHandler}>LOG OUT</span>
            </Link>
          </div>
      </div>
    </div>
  )
}
