import type { FC } from 'react'
import { TextInput, Button } from 'flowbite-react'

export const SearchForm: FC = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
      <TextInput
        id='search'
        type='text'
        required
        className='flex-grow rounded-l-full border-gray-300 shadow-sm focus:ring-0 focus:border-blue-600 w-full'
        placeholder='Search...'
        autoComplete='off'
      />
      <Button name='search' color='blue' size='lg'>
        Search
      </Button>
    </div>
  )
}
