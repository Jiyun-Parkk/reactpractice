import styled from 'styled-components'
import NewsItem from '../components/NewsItem'

const NewsListBox = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  font-size: ${(props) => (props.loading === 'true' ? '35px' : '16px')};
`

const NewsList = ({ loading, newsList }) => {
  return (
    <NewsListBox loading={loading.toString()}>
      {loading
        ? 'Loading...'
        : newsList &&
          newsList.map((list) => <NewsItem key={list.url} list={list} />)}
    </NewsListBox>
  )
}

export default NewsList
