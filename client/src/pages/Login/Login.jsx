import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'


import './Login.scss'
//TODO make css for errors
export default function Login() {
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	const [inputs, setInputs] = useState({
		username: '',
		password: '',
	})
	const { login } = useContext(AuthContext)
	const handleChange = e => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate('/')
		} catch (error) {
			setError(error.response.data);
		}
	};
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
						<input type="text" placeholder='Username' name='username' onChange={handleChange} />
						<input type="password" placeholder='Password' name='password' onChange={handleChange} />
						<button onClick={handleLogin}>Login</button>
						<p>{error && error}</p>
					</form>
				</div>
			</div>
		</div>
	)
}
