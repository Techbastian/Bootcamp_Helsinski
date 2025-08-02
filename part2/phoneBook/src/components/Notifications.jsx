import React from 'react'

const Notifications = ({color, message }) => {
    const notificationStyle = {
        color: color,
        background: 'lightgrey',
        padding: '10px',
        border: `3px solid ${color}`,
        borderRadius: '5px',
        marginBottom: '10px',
        fontSize: '22px',
        textAlign: 'center',
    };

    if (message === null) {
        return null;
    }   
    
  return (
    <div style={notificationStyle}>{message}</div>
  )
}

export default Notifications