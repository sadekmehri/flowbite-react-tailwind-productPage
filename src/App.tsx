import type { FC } from 'react'
import { $DATA } from '@/data/FakeData'
import { NavMenu } from '@/components/Nav/NavMenu'
import { SearchForm } from '@/components/SearchForm/SearchForm'
import { Products } from './components/Card/Products'

export const App: FC = () => {
  return (
    <div className='App max-w-5xl mx-auto'>
      <NavMenu count={10} />
      <SearchForm />
      <Products products={$DATA} />
    </div>
  )
}
