import InputCase from '@/features/InputCase/InputCase'
import PostsCase from '@/features/PostsCase/PostsCase'
import TitleCase from '@/features/TitleCase/TitleCase'
import styled from '@emotion/styled'
import { Roboto } from 'next/font/google'
import type { GetStaticProps } from 'next'

interface Props {
	posts: IPosts[]
}

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const getStaticProps = (async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()
	return { props: { posts } }
}) satisfies GetStaticProps<{
	posts: IPosts[]
}>
export default function Home({ posts }: Props) {
	return (
		<Wrapper className={roboto.className}>
			<Container className='container'>
				<TitleCase />
				<InputCase />
				<PostsCase posts={posts} />
			</Container>
		</Wrapper>
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
