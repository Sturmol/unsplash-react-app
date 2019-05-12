import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID cab1fc63512208561347e5b38b31849a8d83dbf946434fede466e5ebd25ecaf9'
	}
});