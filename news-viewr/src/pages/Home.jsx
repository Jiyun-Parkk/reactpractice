import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
  color: #e8dfca;
  margin-top: 30px;
`
const Wrapper = styled.div`
  width: 50%;
  height: 80vh;
  background: #c69b7b;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
`
const NationBox = styled.div`
  width: 90%;
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`
const Nation = styled(Link)`
  width: 80%;
  padding: 2em 0;
  text-align: center;
  background: #3a3845;
  margin-bottom: 20px;
  border-radius: 20px;
  font-size: 3rem;
  color: #c69b7b;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  &:hover {
    transform: scale(0.9);
  }
`
const Home = () => {
  return (
    <>
      <Title>News World</Title>
      <Wrapper>
        <NationBox>
          <Nation to='/korea'>Korea</Nation>
          <Nation to='/united-states'>United States</Nation>
        </NationBox>
      </Wrapper>
    </>
  )
}

export default Home
