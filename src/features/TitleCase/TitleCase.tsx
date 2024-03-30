import React from 'react'
import styled from '@emotion/styled'

const TitleCase = () => {
	return (
		<>
			<Title>Блог</Title>
			<SubTitle>
				Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
				также переводим зарубежные статьи
			</SubTitle>
		</>
	)
}

const Title = styled.h1`
	font-size: 60px;
`
const SubTitle = styled.p`
	font-size: 24px;
	padding-top: 24px;
`

export default TitleCase
