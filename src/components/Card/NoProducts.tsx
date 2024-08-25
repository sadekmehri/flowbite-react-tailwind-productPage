import type { FC } from 'react'

export const NoProducts: FC = () => {
  return (
    <div className='flex items-center justify-center h-64'>
      <div className='text-center'>
        <p className='text-xl font-semibold text-gray-700'>No Products Found</p>
        <p className='text-sm text-gray-500 mt-2'>
          Sorry, we couldn't find any products that match your search.
        </p>
      </div>
    </div>
  )
}
