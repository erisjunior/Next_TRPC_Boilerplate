import { Fragment, memo, useCallback } from 'react'

import { Menu, Transition } from '@headlessui/react'
import Avatar from 'boring-avatars'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { Routes } from '~/presentation/common/router'

export const Header = memo(() => {
  const { data: session } = useSession()

  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: Routes.HOME })
  }, [])

  return (
    <nav>
      <div className='relative flex items-center justify-between py-2'>
        <div className='relative flex'>
          <Link href={Routes.HOME}>
            <p className='text-2xl font-bold'>Boilerplate</p>
          </Link>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <Menu as='div' className='relative'>
              <div>
                <Menu.Button className='flex rounded-full bg-black-1 ring-1 ring-black-1 hover:shadow-md transition-shadow'>
                  <span className='sr-only'>Open user menu</span>
                  <Avatar
                    size={40}
                    name={session?.user?.email || 'Usuário'}
                    variant='beam'
                    colors={['#000000', '#cccccc']}
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white py-1 shadow-md ring-1 ring-black focus:outline-none'>
                  {!session && (
                    <Link href={Routes.LOGIN}>
                      <Menu.Item>
                        <div className='block px-4 py-2 text-sm text-black font-bold'>
                          Entrar
                        </div>
                      </Menu.Item>
                    </Link>
                  )}
                  {session && (
                    <Menu.Item>
                      <div
                        onClick={handleSignOut}
                        className='block px-4 py-2 text-sm text-black font-bold'
                      >
                        Sair
                      </div>
                    </Menu.Item>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
})

Header.displayName = 'Header'
