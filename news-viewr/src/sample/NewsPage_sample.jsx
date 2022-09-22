import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NewsPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (params.cetegory === undefined) {
      navigate('/home')
    }
  }, [])
  const category = params.category ? params.category : 'all'
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  )
}
export default NewsPage
