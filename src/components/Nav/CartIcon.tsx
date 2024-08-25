import type { FC } from 'react'

type CartIconProps = {
  count: number
}

export const CartIcon: FC<CartIconProps> = (props) => {
  const { count } = props
  return (
    <li>
      <a
        href='#'
        className='relative flex items-center sm:justify-center block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
      >
        <img
          src='https://cdn-icons-png.flaticon.com/512/2696/2696198.png'
          className='w-[30px] h-[25px]'
        />
        <span className='absolute -mt-[15px] -mr-[25px] w-[20px] rounded-full bg-blue-700 text-white text-center'>
          {count}
        </span>
      </a>
    </li>
  )
}
