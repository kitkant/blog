import axios from 'axios'

class Posts {

	getPost = (id : any)  =>{
			const res = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			
			
		return res
	}
}

export const PostsAPI = new Posts()
