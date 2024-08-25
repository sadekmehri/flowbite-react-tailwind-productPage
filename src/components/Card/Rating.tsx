import type { FC } from 'react'
import { Icon } from '@/assets/icons/icon.component'

type RatingProps = {
  rate: number
}

export const Rating: FC<RatingProps> = (props) => {
  const { rate } = props

  return (
    <div className='mt-2 flex items-center'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          name='star'
          key={i}
          className={`h-5 w-5 ${i < Math.floor(rate) ? 'text-yellow-300' : 'text-gray-300'}`}
        />
      ))}
      <span className='ml-2 text-sm font-semibold text-blue-800 dark:text-blue-200'>{rate}</span>
    </div>
  )
}
