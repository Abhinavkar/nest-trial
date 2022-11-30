import React from "react";
import './Events.css'

function Events(props) {
    return (
            <div className='recentEventsCard2'>
                    <div className='eventImage2'>
                        <img src={props.image} alt='Event-img'></img>
                    </div>
                    <p className='eventName2'>{props.name}</p>
                    <p className='eventDesc2'>{props.desc}</p>
            </div>
    )
}
export default Events;