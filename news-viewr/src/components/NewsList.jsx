import styled from 'styled-components'
import NewsItem from '../components/NewsItem'
import usePromise from '../lib/usePromise'
import axios from 'axios'

const NewsListBox = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  font-size: ${(props) => (props.loading === 'true' ? '35px' : '16px')};
`

const NewsList = ({ params }) => {
  const [loading, response, error] = usePromise(() => {
    const country = params.nation
    const query =
      params.category === 'all' ? '' : `&category=${params.category}`
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}${query}&apiKey=b7f1818750c44a07a4e2718c0f6ffb41`
    )
  }, [params.category])

  if (!response) return null
  const { articles } = response.data

  return (
    <NewsListBox loading={loading.toString()}>
      {loading
        ? 'Loading...'
        : response
        ? articles.map((list) => <NewsItem key={list.url} list={list} />)
        : null}
    </NewsListBox>
  )
}

export default NewsList
