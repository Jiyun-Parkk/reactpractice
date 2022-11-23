import { REFUSED } from 'dns'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { container } from 'types'

interface IForm extends container {
  handleFormSubmit: (e: React.FormEvent) => void
}

type Ref = HTMLFormElement

const CustomForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

export const Form = React.forwardRef<Ref, IForm>(
  ({ children, handleFormSubmit }, ref) => (
    <CustomForm
      ref={ref}
      onSubmit={(e: React.FormEvent) => handleFormSubmit(e)}
    >
      {children}
    </CustomForm>
  )
)
