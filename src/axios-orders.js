import axios from 'axios'

const instance = axios.create({
	baseURL:'https://react-my-burger-6e4d7.firebaseio.com/'
})

export default instance;