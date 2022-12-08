import{Navigate} from 'react-router-dom'
const currentUser = true


export const ProtectRoute = ({ children }) => {
    if (!currentUser) {
        return <Navigate to='/login' />
    }
    return children
}