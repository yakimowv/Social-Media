import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './Register.scss'
//TODO make style to error
export default function Register() {
	const navigate = useNavigate()
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		name: '',
		password: ''
	})
	const [error, setError] = useState(null)


	const handleChange = e => {
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleClick = async e => {
		e.preventDefault()
		try {
			await axios.post('http://localhost:3333/api/auth/register', inputs)
			navigate('/')
		} catch (err) {
			setError(err.response.data)
		}
	}
	return (
		<div className='register'>
			<div className='card'>
				<div className='left'>
					<h1>Neoteric Social.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
						alias totam numquam ipsa exercitationem dignissimos, error nam,
						consequatur.
					</p>
					<span>Do you have an account?</span>
					<Link to='/login'>
						<button>Login</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Register</h1>
					<form>
						<input type="text" placeholder='Username' name='username' onChange={handleChange} />
						<input type="text" placeholder='Email' name='email' onChange={handleChange} />
						<input type="text" placeholder='Name' name='name' onChange={handleChange} />
						<input type="password" placeholder='Password' name='password' onChange={handleChange} />
						<p>{error && error}</p>
						<button onClick={handleClick}>Register</button>
					</form>
				</div>
			</div>
		</div>
	)
}
