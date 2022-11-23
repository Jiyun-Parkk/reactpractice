import styled from 'styled-components'
interface ITitle {
  titleText: string
}

const SignTitle = styled.h2`
  padding: 10px;
  margin-bottom: 20px;
`

export const Title = ({ titleText }: ITitle) => {
  return <SignTitle>{titleText}</SignTitle>
}
