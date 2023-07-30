import React from 'react'
import RoomieCard from './rommieCard'

function rommieCards() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <RoomieCard />
            </div>
            <div className='col-md-8'>
                <RoomieCard />
            </div>
            <div className='col-md-8'>
                <RoomieCard />
            </div>
            <div className='col-md-8'>
                <RoomieCard />
            </div>
        </div>
    </div>
  )
}

export default rommieCards