import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Type } from 'typescript'

const CustomButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  cursor: pointer;
`
type BtnType = 'button' | 'submit' | 'reset' | undefined
interface IButton {
  btnText: string
  btnType: BtnType
  handleClickBtn?: () => void
}
export const Button = ({ btnText, btnType, handleClickBtn }: IButton) => {
  return (
    <CustomButton type={btnType} onClick={handleClickBtn}>
      {btnText}
    </CustomButton>
  )
}
