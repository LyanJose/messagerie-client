import * as api from '../api'

export const getMessages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMessages()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createMessage = (message) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(message)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}