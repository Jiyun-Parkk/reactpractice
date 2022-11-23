import React from 'react'
import styled from 'styled-components'
import { container } from 'types'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  background: rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media (min-width: 280px) and (max-width: 760px) {
    width: 90%;
  }
`

export const SignContainer = ({ children }: container) => {
  return <Container>{children}</Container>
}
