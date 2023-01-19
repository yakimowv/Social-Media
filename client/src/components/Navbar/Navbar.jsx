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
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from "../../context/authContext";


export default function Navbar() {
	const { currentUser } = useContext(AuthContext)
	const { toggle, darkMode } = useContext(DarkModeContext)

	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span>neotericsocial</span>
				</Link>
				<HomeOutlinedIcon />
				{darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder='Search....' />
				</div>
			</div>
			<div className='right'>
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsNoneOutlinedIcon />
				<Link to={`/profile/${currentUser.id}`} style={{ textDecoration: 'none' }}>
					<div className="user" >
						<img src={"/upload/"+currentUser.profilePicture} alt='' />
						<span>{currentUser.name}</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
