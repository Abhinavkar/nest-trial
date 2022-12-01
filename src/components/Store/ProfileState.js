import React,{useState} from 'react'
import ProfileContext from './ProfileContext'
export const ProfileState = (props) => {
    const [profile,setProfile] = useState([])
  return (
    <ProfileContext.Provider value={{profile,setProfile}}>
      {props.children}
    </ProfileContext.Provider>
  )
}