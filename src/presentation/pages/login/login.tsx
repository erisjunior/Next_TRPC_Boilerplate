import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { User } from '~/application/models'
import { Routes } from '~/presentation/common/router'
import { Input } from '~/presentation/components'

const inputClass =
  'relative block w-full -space-y-px rounded-md shadow-sm appearance-none rounded-md border border-black-1 p-5 text-black placeholder-gray-500 focus:z-10 focus:border-black-5 focus:outline-none focus:ring-black-5 sm:text-sm'

const Login = () => {
  const formMethods = useForm<User.SignInModel>({
    resolver: zodResolver(User.signInSchema)
  })

  const router = useRouter()

  const onSubmit = useCallback(async (data: User.SignInModel) => {
    await signIn('credentials', { ...data, callbackUrl: Routes.HOME })
  }, [])

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-lg space-y-8'>
        <div>
          <h2 className='mt-6 text-black text-center text-5xl font-bold'>
            Entrar
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
              className={inputClass}
              placeholder='Email'
            />
            <Input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className={inputClass}
              placeholder='Password'
            />
            {router.query.error && (
              <p className='text-black italic text-center'>
                Problema ao fazer login, verifique email e senha
              </p>
            )}
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md border border-transparent bg-black p-5 text-lg font-bold text-white shadow-md hover:shadow-lg transition-shadow'
              >
                Entrar
              </button>
              <p className='mt-2 text-center'>
                <Link
                  href={Routes.REGISTER}
                  className='text-lg font-medium text-black'
                >
                  Crie sua conta agora
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Login
