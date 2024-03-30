import React, { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const BackCase = () => {
	const [like, setLike] = useState<number>(0)
	const [dislike, setDislike] = useState<number>(0)
	const [activeLike, setActiveLike] = useState<boolean>(false)
	const [activeDislike, setActiveDislike] = useState<boolean>(false)

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
		<Wrapper>
			<Link href={`/`}>
				<WrapperBack>
					<Back>
						<Image
							src={'/icons/keyboard_backspace.svg'}
							width={24}
							height={24}
							alt='back btn'
						/>
					</Back>
					<BackText>Вернуться к статьям</BackText>
				</WrapperBack>
			</Link>
			<WrapperRating>
				<ContainerRating>
					<ButtonRating onClick={likeChange}>
						<Image
							src={
								activeLike ? '/icons/likeActive.svg' : '/icons/likeDefault.svg'
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
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
const WrapperBack = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
`
const Back = styled.button`
	display: flex;
	width: 24px;
	height: 24px;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
`
const BackText = styled.span`
	font-size: 24px;
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

export default BackCase
