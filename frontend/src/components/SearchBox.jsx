import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()
  const { keyword: urlKeyword } = useParams()

  const [keyword, setKeyword] = useState(urlKeyword || '')

  const searchHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      setKeyword('')
      navigate(`/search/${keyword}`)
    } else {
      navigate('/') // Redirect to home page if no keyword is provided.
    }
  }

  return (
    <Form onSubmit={searchHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        placeholder='Search products...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>

      <Button type='submit' variant='outline-light' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
