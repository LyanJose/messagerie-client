import axios from 'axios'

const url = 'http://127.0.0.1:8000/'

export const fetchMessages = () => axios.get(url)
export const createMessage = (newMessage) => axios.post(url, newMessage)