import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
  &:focus-within {
    box-shadow: 0px 0px 4px #ffe9b1;
  }
`
export const CustomInput = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => props.theme.inputColor};
  color: #000;
  &:focus {
    outline: none;
  }
`
export const Label = styled.label`
  text-align: center;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.pointColor2};
  padding: 10px;
  width: 100%;
  border-top-left-radius: 5px;
  flex-basis: 100px;
`
