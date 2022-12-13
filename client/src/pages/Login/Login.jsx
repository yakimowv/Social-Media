import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/authContext'


import './Login.scss'

export default function Login() {
    const {login} =useContext(AuthContext)


	const handleClick=()=>{
		login()
	}
	return (
		<div className='login'>
			<div className='card'>
				<div className='left'>
					<h1>Hello World.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
						alias totam numquam ipsa exercitationem dignissimos, error nam,
						consequatur.
					</p>
					<span>Don't have an account?</span>
					<Link to='/register'>
					<button>Register</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Login</h1>
					<form>
						<input type="text" placeholder='Username' />
						<input type="password" placeholder='Password' />
						<button onClick={handleClick}>Login</button>
					</form>
				</div>
			</div>
		</div>
	)
}
