import React from 'react'
import img from'./PHOTO.PNG'
import'./photo.css'


function ProfilePhoto() {
  return (
    <div className='photo'>
      <img src={img}></img>
    </div>
  )
}

export default ProfilePhoto
