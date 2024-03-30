import React from 'react'
import styled from '@emotion/styled'

const InputCase = () => {
	return (
		<Wrapper>
			<Input></Input>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 32px 0;
	width: 100%;
`
const Input = styled.input`
	width: 100%;
`

export default InputCase
