import InputCase from '@/features/InputCase/InputCase'
import PostsCase from '@/features/PostsCase/PostsCase'
import TitleCase from '@/features/TitleCase/TitleCase'
import styled from '@emotion/styled'
import type { GetStaticProps } from 'next'
import { Roboto } from 'next/font/google'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, store } from '../store/store'
import { createPost, fetchUserData } from '@/slices/posts.slice'
import { useEffect } from 'react'
import Pagination from '@/features/Pagination/Pagination'

interface Props {
	posts: IPosts[]
}

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
})


export default function Home() {

	const dispatch = useDispatch<AppDispatch>();

 
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

	const { data, loading, error } = useSelector((state: any) => state.posts)
	return (
		<>
		{data ? 
			<Wrapper className={roboto.className}>
			<Container className='container'>
				<TitleCase />
				<InputCase />
				<PostsCase posts={data} loading={loading} error={error} />
			</Container>
		</Wrapper>
		:
		<div>Loading</div>
		}
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
	align-items: center;
	flex-direction: column;
`
