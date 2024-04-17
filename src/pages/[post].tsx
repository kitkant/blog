import { PostsAPI } from '@/api/getPost'
import BackCase from '@/features/BackCase/BackCase'
import PostDetailCase from '@/features/PostDetailCase/PostDetailCase'
import styled from '@emotion/styled'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
})

const Post = () => {
	const [data, setData] = useState({ title: '', body: '' })

	const router = useRouter()
	const id = router.query.post

	useEffect(() => {
		if (id)
			PostsAPI.getPost(id).then((data: any) => {
				setData(data.data)
			})
	}, [id])


	return (
		<>
			{data.title.length !== 0 && data.body.length !== 0 ? (
				<Wrapper className={roboto.className}>
					<Container className='container'>
						<BackCase />
						<PostDetailCase data={data} />
					</Container>
				</Wrapper>
			) : (
				<Wrapper className={roboto.className}>Loading...</Wrapper>
			)}
		</>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	color: #0a0a0a;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`
export default Post
