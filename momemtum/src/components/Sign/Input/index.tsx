import { InputContainer, Label, CustomInput } from './style'

interface IInput {
  labelName: string
}

export const Input = ({ labelName }: IInput) => {
  return (
    <InputContainer>
      <Label>{labelName}</Label>
      <CustomInput type='text' />
    </InputContainer>
  )
}
