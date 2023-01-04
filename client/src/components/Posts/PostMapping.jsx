import './PostMapping.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { useState } from 'react';
import moment from 'moment';

export default function PostMapping({ post }) {
    const [commentOpen,setCommentOpen]=useState(false)

    //TODO DELETE
    const liked = true

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePicture} alt='Profile' />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={'./upload/' + post.img} alt='Post' />
                </div>
                <div className="info">
                    <div className="item">
                        {liked 
                        ? <FavoriteOutlinedIcon />
                        : <FavoriteBorderOutlinedIcon/>}
                        12 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                      <TextsmsOutlinedIcon/>
                      20 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
    )
}
