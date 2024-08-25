import type { Product } from '@/types/Product'
import type { FC } from 'react'
import { CardGroup } from '@/components/Card/CardGroup'
import { NoProducts } from '@/components/Card/NoProducts'

type ProductsProps = {
  products: Array<Product>
}

export const Products: FC<ProductsProps> = (props) => {
  const { products } = props

  if (products.length === 0) {
    return <NoProducts />
  }

  return (
    <div className='mt-4 mb-4'>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-2 gap-y-2'>
        {products.map((product) => (
          <CardGroup key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
