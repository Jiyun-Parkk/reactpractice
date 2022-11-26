import React, { forwardRef } from 'react'
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import { InputContainer, Label, CustomInput } from './style'

interface IInput {
  labelName: string
  name: string
  type: string
  register?: UseFormRegisterReturn
}

type inputRef = HTMLInputElement

export const Input = React.forwardRef<inputRef, IInput>(
  ({ labelName, name, type, register }, ref) => {
    return (
      <InputContainer>
        <Label>{labelName}</Label>
        <CustomInput
          ref={ref}
          name={name}
          type={type}
          {...register}
          autoComplete='off'
        />
      </InputContainer>
    )
  }
)
