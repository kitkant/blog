import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props extends IPosts {
	index: number
}

const Post = ({ id, userId, title, body, index }: Props) => {
	useEffect(() => {
		setIsClient(true)
	}, [])

	const [isClient, setIsClient] = useState(false)
	const [like, setLike] = useState<number>(getRandomIntInclusive)
	const [dislike, setDislike] = useState<number>(getRandomIntInclusive)
	const [activeLike, setActiveLike] = useState<boolean>(false)
	const [activeDislike, setActiveDislike] = useState<boolean>(false)

	function getRandomIntInclusive(): number {
		const minCeiled = Math.ceil(0)
		const maxFloored = Math.floor(50)
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
	}

	const likeChange = (): void => {
		if (!activeLike) {
			setActiveLike(true)
			setLike(like + 1)
			
		}

		if (activeDislike) {
			setActiveDislike(false)
			setDislike(dislike - 1)
		}
	}
	const dislikeChange = (): void => {
		if (!activeDislike) {
			setActiveDislike(true)
			setDislike(dislike + 1)
			
		}

		if (activeLike) {
			setActiveLike(false)
			setLike(like - 1)
		}
	}

	return (
		<>
			{isClient ? (
				<Wrapper>
					<Image
						src={index === 0 ? '/image/maximg.webp' : '/image/minimg.webp'}
						alt='post img'
						width={index === 0 ? 1140 : 558}
						height={index === 0 ? 600 : 273}
					/>
					<Description>
						<TitleWrapper>
							<Title>{title}</Title>
							{index === 0 ? (
								<WrapperRating>
									<ContainerRating>
										<ButtonRating onClick={likeChange}>
											<Image
												src={
													activeLike
														? '/icons/likeActive.svg'
														: '/icons/likeDefault.svg'
												}
												alt='post img'
												width={32}
												height={32}
											/>
										</ButtonRating>
										<Rating>{like}</Rating>
									</ContainerRating>
									<ContainerRating>
										<ButtonRating onClick={dislikeChange}>
											<Image
												src={
													activeDislike
														? '/icons/dislikeActive.svg'
														: '/icons/dislikeDefault.svg'
												}
												alt='post img'
												width={32}
												height={32}
											/>
										</ButtonRating>
										<Rating>{dislike}</Rating>
									</ContainerRating>
								</WrapperRating>
							) : (
								<></>
							)}
						</TitleWrapper>
						{index === 0 ? (
							<>
								<BodyWrapper>{body}</BodyWrapper>
								<WrapperFirstBtn>
									<ButtonMore><Link href={`/${id}`}>Читать далее</Link></ButtonMore>
								</WrapperFirstBtn>
							</>
						) : (
							<WrapperBtn>
								<WrapperRating>
									<ContainerRating>
										<ButtonRating onClick={likeChange}>
											<Image
												src={
													activeLike
														? '/icons/likeActive.svg'
														: '/icons/likeDefault.svg'
												}
												alt='post img'
												width={32}
												height={32}
											/>
										</ButtonRating>
										<Rating>{like}</Rating>
									</ContainerRating>
									<ContainerRating>
										<ButtonRating onClick={dislikeChange}>
											<Image
												src={
													activeDislike
														? '/icons/dislikeActive.svg'
														: '/icons/dislikeDefault.svg'
												}
												alt='post img'
												width={32}
												height={32}
											/>
										</ButtonRating>
										<Rating>{dislike}</Rating>
									</ContainerRating>
								</WrapperRating>
								<ButtonMore>
									<Link href={`/${id}`}>Читать далее</Link>
								</ButtonMore>
							</WrapperBtn>
						)}
					</Description>
				</Wrapper>
			) : (
				<></>
			)}
		</>
	)
}

const Wrapper = styled.div`
	border-radius: 12px;
	box-shadow: 1px 1px 1px 1px #959298;
	overflow: hidden;
`
const Description = styled.div`
	padding: 24px 16px 32px 16px;
	display: flex;
	flex-direction: column;
	gap: 32px;
`
const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
const Title = styled.h2`
	font-weight: 700;
	font-size: 28px;
	&:first-letter {
		text-transform: uppercase;
	}
`
const WrapperRating = styled.div`
	display: flex;
	gap: 24px;
`
const ContainerRating = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const ButtonRating = styled.button`
	border: none;
	width: 32px;
	heigh: 32px;
	cursor: pointer;
	background-color: transparent;
	display: flex;
`
const Rating = styled.div`
	color: #4f4f4f;
	font-size: 18px;
`
const BodyWrapper = styled.p`
	font-size: 24px;
`

const ButtonMore = styled.button`
	border: 1px solid #0a0a0a;
	border-radius: 60px;
	padding: 14px 24px 12px 24px;
	cursor: pointer;
	max-width: 152px;
	max-height: 45px;
	font-size: 16px;
	font-weight: 400;
	background-color: transparent;
`
const WrapperBtn = styled.div`
	display: flex;
	justify-content: space-between;
`

const WrapperFirstBtn = styled.div`
	display: flex;
	justify-content: end;
`
export default Post
