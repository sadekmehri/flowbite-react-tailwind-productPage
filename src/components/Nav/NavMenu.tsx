import { useCallback, useState, type FC } from 'react'
import { CartIcon } from '@/components/Nav/CartIcon'
import { Logo } from '@/components/Nav/Logo'
import { NavLink } from '@/components/Nav/NavLink'
import { NavToggle } from '@/components/Nav/NavToggle'

type NavMenuProps = {
  count: number
}

export const NavMenu: FC<NavMenuProps> = (props) => {
  const { count } = props
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleMenu = useCallback(() => {
    setIsNavOpen((isOpen) => !isOpen)
  }, [])

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo />
        <NavToggle onClick={handleToggleMenu} />
        <div className={`w-full md:block md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <NavLink href='#' text='Home' isActive />
            <NavLink href='#' text='About' />
            <NavLink href='#' text='Services' />
            <NavLink href='#' text='Pricing' />
            <CartIcon count={count} />
          </ul>
        </div>
      </div>
    </nav>
  )
}
