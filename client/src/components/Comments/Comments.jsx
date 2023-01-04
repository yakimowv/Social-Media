
import { useContext } from 'react'
import './Comments.scss'
import {AuthContext} from '../../context/authContext'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import moment from 'moment'
import { useState } from 'react'


export default function Comments({postId}) {
    const [desc,setDesc]= useState('')
    const {currentUser}= useContext(AuthContext)

    const { isLoading, error, data } = useQuery(['comments'], () =>
    makeRequest.get('/comments?postId='+postId).then(res => {
      return res.data
    })
  )
 

  
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.profilePicture} alt='Profile'/>
        <input type="text" placeholder='Write a comment ....' value={desc} onChange={e => setDesc(e.target.value)}/>       
        <button onClick={handleClick}>Send</button> 
        </div>
        {isLoading 
        ? `Loalding...`
        : data.map(comment=>(
            <div className='comment'>
                <img src={comment.profilePicture} alt='Profile'/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))}
    </div>
  )
}
