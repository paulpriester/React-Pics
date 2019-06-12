import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 58ba5df19336f20cbbf4089a67272809df855e32be8bdf4f6f56576339495ce4'
	}
})