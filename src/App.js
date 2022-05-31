import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewMessage from './components/NewMessage';
import MessageList from './components/MessageList';
import { useDispatch } from 'react-redux';
import { getMessages } from './actions/messages'
import { useSelector } from 'react-redux'
import io from 'socket.io-client'

let socket;

const App = () => {
  
  const messages = useSelector((state) => state.messages)
  // console.log(messages)
  const today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages())

    socket = io('localhost:8000', { transports: ['websocket'] })

    socket.on('sendMessage', ({ pseudo, message }) => {
      const newMessages = {pseudo, message} 
      console.log(newMessages)
    })
    
  }, [dispatch])

  return (
    <div className='container'>
      <h1>Message groupé</h1> {today}
      <hr/>
      
      <NewMessage /> <br/>

      {messages.map((message) => (
        <div key={message._id}>
          <MessageList message={message} />
        </div>
      ))}
    </div>
  )
}

export default App