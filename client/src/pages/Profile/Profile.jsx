import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/Posts/Posts';
import Update from '../../components/Update/Update';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";


export default function Profile() {
  const [openUpdate, setOpenUpdate] = useState(false);
  const {currentUser} =useContext(AuthContext)
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  console.log(userId)
  const { isLoading, error, data } = useQuery(['user'], () =>
  makeRequest.get(`/users/find/${userId}`).then(res => {
    return res.data
  })
)


const { data:relationshipData } = useQuery(['relationship'], () =>
makeRequest.get('/relation?followedUserId=' + userId).then(res => {
  return res.data
})
)
const queryClient = useQueryClient();

const mutation = useMutation(
  (following) => {
      if(following) return makeRequest.delete('/relation?userId='+ userId)
    return makeRequest.post("/relation", {userId});
  },
  {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["relationship"]);
    },
  }
);

const followHandler = ()=>{
  mutation.mutate(relationshipData.includes(currentUser.id))

}

  return (
    <div className="profile">
      <div className="images">
        <img src={"/upload/"+data?.coverPicture} alt="Cover" className="cover" />
        <img src={"/upload/"+data?.profilePicture} alt="Profile" className="profilePicture" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='https://www.facebook.com/'>
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href='https://www.instagram.com/'>
              <InstagramIcon fontSize="large" />
            </a>
            <a href='https://twitter.com/'>
              <TwitterIcon fontSize="large" />
            </a>
            <a href='https://bg.linkedin.com/'>
              <LinkedInIcon fontSize="large" />
            </a>
            <a href='https://www.pinterest.at/'>
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{data?.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data?.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data?.website}</span>
              </div>
            </div>
            {userId === currentUser.id
            ?<button onClick={()=>setOpenUpdate(true)}>update</button>
            :<button onClick={followHandler}>
              {relationshipData?.includes(currentUser.id)
              ?'Following'
              :'Follow'}
            </button>}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId}/>
      </div>
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  )
}
