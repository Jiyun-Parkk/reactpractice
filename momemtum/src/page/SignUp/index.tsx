import React, { useRef } from 'react'
import { SignContainer } from 'layout'
import { Input, Form, Title, Button } from 'components'

export const SignUp = () => {
  const signForm = useRef<HTMLFormElement>(null)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <SignContainer>
      <Title titleText='Register account' />
      <Form
        ref={signForm}
        handleFormSubmit={(e: React.FormEvent) => handleFormSubmit(e)}
      >
        <Input labelName='ID' />
        <Input labelName='PW' />
        <Button btnType='submit' btnText='Sign up!' />
      </Form>
    </SignContainer>
  )
}
