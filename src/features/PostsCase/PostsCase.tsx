import styled from '@emotion/styled'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Masonry from 'react-responsive-masonry'
import Pagination from '../Pagination/Pagination'
import Post from './components/Post'
import { usePaginate } from '@/hook/usePaginate'

interface Props {
	data: null | IPosts[]
	loading: boolean
	error: null | string
}

const PostsCase = ({posts, loading, error} : any) => {
	// const { data, loading, error } = useSelector((state: any) => state.posts)
	
	
	const [currentPage, setCurrentPage] = useState(1);
 	const pageSize = 9;

	
	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};


	const data = usePaginate(posts, currentPage, pageSize);
	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<>
			{data ? (
				<Wrapper>
					{
						<FirstPost>
							<Post
								id={data[0].id}
								userId={data[0].userId}
								title={data[0].title}
								body={data[0].body}
								index={0}
								like={data[0].like}
								dislike={data[0].dislike}
							/>
						</FirstPost>
					}
					<Masonry columnsCount={2} gutter={'24px'}>
						{data.map((post: any, index: number) => {
							if (index === 0) return
							return (
								<Fragment key={post.id}>
									<Post
										id={post.id}
										userId={post.userId}
										title={post.title}
										body={post.body}
										index={index}
										like={post.like}
										dislike={post.dislike}
									/>
								</Fragment>
							)
						})}
					</Masonry>
					<Pagination
							items={posts.length} // 100
							currentPage={currentPage} // 1
							pageSize={pageSize} // 10
							onPageChange={onPageChange}
        />
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
