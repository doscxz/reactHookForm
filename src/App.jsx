import { Controller, FormProvider, useForm } from 'react-hook-form'
import styles from './App.module.scss'
// import { useEffect } from 'react'
function App() {

  const { register, handleSubmit, formState, control /*reset, watch*/ } = useForm({
    mode: 'onChange'
  })

  const emailErrors = formState.errors['email']?.message
  const messageErrors = formState.errors['message']?.message

  const onSubmit = (data) => {
    console.log(data)
  }

  // const emailWatch = watch('email')

  // useEffect(() => {
  //   console.log(emailWatch);
  // }, [emailWatch])

  // useEffect(() => {
  //   reset({
  //     'email': 'asdas@asdas.asdas',
  //     'message': 'asdasg'
  //   })
  // }, [reset])


  return (
    <FormProvider {...methods}>
      <h1>Feedback form</h1>

      {/* <button onClick={() => reset()}>reset</button> */}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>


        <input type="email" placeholder="e-mail" {...register('email', {
          required: 'This field is required!',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })} />

        {emailErrors ? <div style={{
          color: 'tomato'
        }}>{emailErrors}</div> : ''}

        <textarea placeholder="message" {...register('message', {
          required: 'This field is required!'
        })}></textarea>
        {messageErrors ? <div style={{
          color: 'tomato'
        }}>{messageErrors}</div> : ''}

        <Controller
          control={control}
          name='boolean'
          render={({ field }) => (
            <button onClick={(e) => {
              e.preventDefault()
              field.onChange(!field.value)
            }}>
              {field.value ? 'важно' : 'не важно'}
            </button>
          )}
        />


        <button type="submit">send</button>

      </form>
    </FromPro>
  )
}

export default App
