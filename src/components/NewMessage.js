import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMessage } from '../actions/messages'

const NewMessage = () => {

    const [messageData, setMessageData] = useState({ pseudo: '', message: '' })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createMessage(messageData))
        setMessageData({ pseudo: '', message: '' })
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <input type="text" name="pseudo" className="form-control" placeholder="Entrer votre pseudo" value={messageData.pseudo} onChange={ (e) => setMessageData({ ...messageData, pseudo: e.target.value }) } />
            </div> <br />

            <div className="form-group">
                <textarea className="form-control" placeholder="Entrer le message" name="message" rows="3" value={messageData.message} onChange={ (e) => setMessageData({ ...messageData, message: e.target.value }) }></textarea>
            </div> <br />

            <button type="submit" className="btn btn-success">Envoyer</button>

        </form>
    )
}

export default NewMessage