import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';


export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/'style={{textDecoration:'none'}}>
					<span>neotericsocial</span>
				</Link>
				<HomeOutlinedIcon/>
				<DarkModeOutlinedIcon/>
				<GridViewOutlinedIcon/>
				<div className="search">
					<SearchOutlinedIcon/>
					<input type="text" placeholder='Search....' />
				</div>
			</div>
			<div className='right'>
				<PersonOutlineOutlinedIcon/>
				<EmailOutlinedIcon/>
				<NotificationsNoneOutlinedIcon/>
				<div className="user">
					<img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
					<span>Valeri Yakimov</span>
				</div>
			</div>
		</div>
	)
}
