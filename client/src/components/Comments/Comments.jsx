
import { useContext } from 'react'
import './Comments.scss'
import {AuthContext} from '../../context/authContext'


export default function Comments() {
    const {currentUser}= useContext(AuthContext)

    //TODO DELETE
    const comments =[
        {
            id: 1,
            desc: 'LOL',
            name: 'Tori Black',
            userId:1,
            profilePicture:'https://m.media-amazon.com/images/M/MV5BMTQwNDcwNzMzM15BMl5BanBnXkFtZTcwODk2ODM3OA@@._V1_.jpg',
        },
        {
            id: 2,
            desc: 'LOL',
            name: 'Robby the Lobster',
            userId:2,
            profilePicture:'https://static.wikia.nocookie.net/spuzva-bob-skockani/images/3/37/Mr_krabs.jpg/revision/latest?cb=20180903171107&path-prefix=hr',
        },
    ]



  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.profilePicture} alt='image'/>
        <input type="text" placeholder='Write a comment ....' />       
        <button>Send</button> 
        </div>
        {comments.map(comment=>(
            <div className='comment'>
                <img src={comment.profilePicture} alt='image'/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'> 1 hour ago</span>
            </div>
        ))}
    </div>
  )
}
