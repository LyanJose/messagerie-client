export default (messages = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return messages.filter((message)=>message._id !== action.payload)
        case 'UPDATE':
            return messages.map((message)=>message._id == action.payload._id ? action.payload : message)
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...messages, action.payload]
        default:
            return messages
    }
}