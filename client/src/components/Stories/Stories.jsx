import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './Stories.scss'

export default function Stories() {
    const {currentUser}=useContext(AuthContext)

    //DATA TO DELETE
    const stories = [
        {
            id: 1,
            name: 'Valeri Yakimov',
            img: 'https://icdn.sempreinter.com/wp-content/uploads/2019/01/javier-zanetti-Champions-League-e1548497863289.jpg'
        },
        {
            id: 2,
            name: 'Tori Black',
            img: 'https://i.pinimg.com/originals/59/5d/a7/595da7af08374a4e3930930df3b93524.jpg'
        },
        {
            id: 3,
            name: 'Sasuke Uchiha',
            img: 'https://qph.cf2.quoracdn.net/main-qimg-31ab5921a5dea0ec82113151f0a05e57-pjlq'
        },
        {
            id: 4,
            name: 'Itachi Uchiha',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb3dsTbnaZ0TdBTxr9b9W7ZP5AYeuIhrniQ&usqp=CAU'
        },

    ]
    return (
        <div className='stories'>
            <div className="story">
                    <img src={currentUser.profilePicture} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>

            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}
