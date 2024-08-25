import type { FC } from 'react'

type NavLinkProps = {
  href: string
  text: string
  isActive?: boolean
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const { href, text, isActive = false } = props

  const activeClass = isActive
    ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'

  return (
    <li>
      <a
        href={href}
        className={`block py-2 px-3 ${activeClass} md:p-0`}
        aria-current={isActive ? 'page' : undefined}
      >
        {text}
      </a>
    </li>
  )
}
