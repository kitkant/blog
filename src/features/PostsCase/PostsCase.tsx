import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import Post from './components/Post'
import Masonry from 'react-responsive-masonry'

interface Props {
	posts: IPosts[]
}

const PostsCase = ({ posts }: Props) => {


	return (
		<>
			{Object.keys(posts).length !== 0 ? (
				<Wrapper>
					{
						<FirstPost>
							<Post
								id={posts[0].id}
								userId={posts[0].userId}
								title={posts[0].title}
								body={posts[0].body}
								index={0}
							/>
						</FirstPost>
					}
					<Masonry columnsCount={2} gutter={'24px'}>
						{posts.map((post: IPosts, index: number) => {
							if (index === 0) return
							return (
								<Fragment key={post.id}>
									<Post
										id={post.id}
										userId={post.userId}
										title={post.title}
										body={post.body}
										index={index}
									/>
								</Fragment>
							)
						})}
					</Masonry>
				</Wrapper>
			) : (
				<>
					<div>No data</div>
				</>
			)}
		</>
	)
}

const Wrapper = styled.div``
const FirstPost = styled.div`
	margin-bottom: 24px;
`

export default PostsCase
