import type { FC } from 'react'

export const Logo: FC = () => {
  return (
    <a href='https://flowbite.com/' className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img src='https://flowbite.com/docs/images/logo.svg' className='h-8' alt='Flowbite Logo' />
      <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        Flowbite
      </span>
    </a>
  )
}
