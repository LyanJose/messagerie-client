import React from 'react'

const MessageList = ({ message }) => {
    return (
        <div className="message alert alert-success" role="alert">
            <strong>{message.pseudo} : </strong>{message.message}
        </div>

    )
}

export default MessageList