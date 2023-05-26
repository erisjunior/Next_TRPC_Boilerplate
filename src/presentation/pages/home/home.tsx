import { Session } from 'next-auth'
import Link from 'next/link'

import { Routes } from '~/presentation/common/router'

const Home = ({ session }: { session: Session | null }) => {
  if (!session) {
    return (
      <div className='my-10 flex flex-col justify-center w-full'>
        <div className='flex justify-center text-center'>
          <Link
            href={Routes.REGISTER}
            className='py-4 px-8 w-full md:w-fit flex flex-col justify-center cursor-pointer border-2 border-black-1 rounded-2xl shadow-md hover:shadow-lg transition-shadow'
          >
            <p className='uppercase text-black text-lg'>Cadastre-se</p>
          </Link>
        </div>
        <p className='text-black text-md mt-4 text-center'>
          Já possui conta?{' '}
          <Link className='text-black font-bold' href={Routes.LOGIN}>
            Entre
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className='my-10 flex flex-col md:flex-row justify-center w-full text-center'>
      {JSON.stringify(session, null, 2)}
    </div>
  )
}

export default Home
