import type { FC } from 'react'
import type { Product } from '@/types/Product'
import { Card } from 'flowbite-react'
import { Rating } from './Rating'

type CardGroupProps = {
  product: Product
}

export const CardGroup: FC<CardGroupProps> = (props) => {
  const { product } = props
  const { title, price, image, rating } = product

  return (
    <Card className='flex flex-col justify-between h-full p-4 shadow-md'>
      <div className='flex justify-center'>
        <img src={image} className='h-48 object-contain' alt={title} />
      </div>
      <div className='mt-4'>
        <a href='#' className='block'>
          <h5 className='text-lg font-semibold text-gray-900 dark:text-white truncate'>{title}</h5>
        </a>
        <Rating rate={rating.rate} />
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <span className='text-xl font-bold text-gray-900 dark:text-white'>${price}</span>
        <a
          href='#'
          className='rounded-lg bg-blue-700 px-5 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add to cart
        </a>
      </div>
    </Card>
  )
}
