import { SignContainer } from 'layout'
import { Input, Form, Title, Button } from 'components'
import { useForm } from 'react-hook-form'
import { auth, db } from 'firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'

interface ISignValue {
  id: string
  pw: string
  nickname: string
}
export const SignUp = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISignValue>()
  const onSubmit = handleSubmit((data) => {
    createUserWithEmailAndPassword(auth, data.id, data.pw)
      .then((res) => {
        console.log('등록성공!')
        //navigate('/')
        setValue('id', '')
        setValue('pw', '')
        setValue('nickname', '')

        addDoc(collection(db, 'users'), {
          id: res.user.uid,
          nick: data.nickname,
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })
  const { id: idError, pw: pwError } = errors
  console.log(errors)
  return (
    <SignContainer>
      <Title titleText='Register account' />
      <Form handleFormSubmit={onSubmit}>
        <Input
          name='id'
          register={register('id', {
            required: 'Required id',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          labelName='ID'
          type='email'
        />
        {/*{idError && idError.type === 'required' && idError.message}*/}
        <Input
          name='pw'
          register={register('pw', {
            required: 'Required password',
            minLength: {
              value: 6,
              message: 'Required length is more than 6',
            },
          })}
          labelName='PW'
          type='password'
        />
        <Input
          name='nickname'
          register={register('nickname', {
            required: 'Required nickname',
          })}
          labelName='nickname'
          type='text'
        />
        {/*{idError && idError.type === 'required'
          ? null
          : pwError && pwError.type === 'required' && pwError.message}*/}
        <Button btnType='submit' btnText='Sign up!' />
      </Form>
    </SignContainer>
  )
}
