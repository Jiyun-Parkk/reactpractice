import { Button, Form, Input, Title } from 'components'
import { auth } from 'firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { SignContainer } from 'layout'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    signInWithEmailAndPassword(auth, data.loginId, data.loginPw).then(() => {
      navigate('/')
      setValue('loginId', '')
      setValue('loginPw', '')
    })
  })

  return (
    <SignContainer>
      <Title titleText='Welcome!' />
      <Form handleFormSubmit={onSubmit}>
        <Input
          name='id'
          labelName='ID'
          type='email'
          register={register('loginId', {
            required: 'Required id',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        <Input
          name='pw'
          labelName='PW'
          type='password'
          register={register('loginPw', {
            required: 'Required password',
            minLength: {
              value: 6,
              message: 'Required length is more than 6',
            },
          })}
        />
        <Button btnText='Login' btnType='submit' />
      </Form>
    </SignContainer>
  )
}
