import styled from 'styled-components'
import { container } from 'types'

interface IForm extends container {
  handleFormSubmit: () => void
}

const CustomForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

export const Form = ({ children, handleFormSubmit }: IForm) => (
  <CustomForm onSubmit={handleFormSubmit}>{children}</CustomForm>
)
