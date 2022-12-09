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

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className='menu'>
          <div className='user'>
            <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <span>Valeri Yakimov</span>
          </div>
          <div className='item'>
            <img src={Friends} alt='Friends img' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={Groups} alt='Groups img' />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src={Market} alt='MarketPlace img' />
            <span>MarketPlace</span>
          </div>
          <div className='item'>
            <img src={Watch} alt='Watch img' />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src={Memories} alt='Memories img' />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className='item'>
            <img src={Events} alt='Events img' />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={Gaming} alt='Gaming img' />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={Gallery} alt='Gallery img' />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src={Videos} alt='Videos img' />
            <span>Videos</span>
          </div>
          <div className='item'>
            <img src={Messages} alt='Messages img' />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>
        <div className='item'>
            <img src={Fund} alt='Fund img' />
            <span>Fundralser</span>
          </div>
          <div className='item'>
            <img src={Tutorials} alt='Tutorials img' />
            <span>Tutorials</span>
          </div>
          <div className='item'>
            <img src={Courses} alt='Courses img' />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}
