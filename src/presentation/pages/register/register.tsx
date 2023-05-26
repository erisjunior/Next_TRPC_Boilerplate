import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

import { User } from '~/application/models'
import { classNames } from '~/presentation/common/helpers'
import { Routes } from '~/presentation/common/router'
import { Input } from '~/presentation/components'
import { useSignUpMutation } from '~/presentation/hooks'

const inputClass =
  'relative block w-full -space-y-px rounded-md shadow-sm appearance-none rounded-md border border-black-1 p-5 text-black placeholder-gray-500 focus:z-10 focus:border-black-5'

export default function Register() {
  const formMethods = useForm<User.SignUpModel>({
    resolver: zodResolver(User.signUpSchema)
  })

  const { mutateAsync: signUp } = useSignUpMutation()

  const onSubmit = useCallback(
    async (data: User.SignUpModel) => {
      try {
        await signUp(data)
        await signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl: Routes.HOME
        })
      } catch (error) {}
    },
    [signUp]
  )

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-lg space-y-8'>
        <div>
          <h2 className='mt-6 text-black text-center text-5xl font-bold'>
            Crie uma conta agora
          </h2>
        </div>
        <FormProvider {...formMethods}>
          <form
            className='mt-8 space-y-6'
            onSubmit={formMethods.handleSubmit(onSubmit)}
          >
            <Input
              name='email'
              type='email'
              autoComplete='email'
              required
              className={classNames(inputClass, 'rounded-t-md')}
              placeholder='Email'
            />
            <Input
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className={inputClass}
              placeholder='Senha'
            />
            <Input
              name='fullName'
              type='text'
              required
              className={classNames(inputClass, 'rounded-b-md')}
              placeholder='Nome'
            />
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md border border-transparent bg-black p-5 text-lg font-bold text-white shadow-md hover:shadow-lg transition-shadow'
              >
                Cadastrar
              </button>
              <p className='mt-2 text-center'>
                <Link
                  href={Routes.LOGIN}
                  className='text-lg font-medium text-black'
                >
                  Entre na sua conta
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
