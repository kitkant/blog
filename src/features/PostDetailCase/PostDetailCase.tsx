import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

interface Props {
	data: {
		title: string
		body: string
	}
}

const PostDetailCase = (data: Props) => {
	console.log(data.data.title)
	return (
		<Wrapper>
			<Title>{data.data.title}</Title>
			<Image
				src={'/image/midleimg.webp'}
				width={848}
				height={477}
				alt='post img'
			/>
			<Body>{data.data.body}</Body>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 48px;
`
const Title = styled.h1`
	font-size: 40px;
	&:first-letter {
		text-transform: uppercase;
	}
`
const Body = styled.p`
	max-width: 848px;
	font-size: 18px;
`
export default PostDetailCase
