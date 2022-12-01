import React from "react";
import './Profile.css'

function Profile(props) {
    console.log(props);
    return (
        <div className='profileView'>
            <div className='recentProfileCard'>
                <div className='profImage'>
                    <img src={props.avatar} alt='user-profile-pic'></img>
                </div>
                <div className="textDetails">
                    <p className='profName'>{props.name}</p>
                    <p className='profStat'>{props.status}</p>
                    <p className='profDesignation'>{props.desgination}</p>
                    <p className='profUsername'>{props.username}</p>
                    <p className='profBio'>{props.bio}</p>
                    <p className='profPhone'>{props.phone}</p>
                    <p className='profcurrentOrganization'>{props.currentorganization}</p>
                    <p className='profEmail'>{props.email}</p>
                    <p className='profBatch'> {props.batch} </p>
                    <p className='profDob'>{props.dob}</p>
                    <p className='profGender'>{props.gender}</p>
                    <p className='profStatus'>{props.status}</p>
                </div>
            </div>
        </div>
    )
}
export default Profile;