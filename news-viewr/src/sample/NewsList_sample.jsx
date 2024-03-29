import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const NewsList = ({ category }) => {
  //const [articles, setArticles] = useState(null)
  //const [loading, setLoading] = useState(false)

  //useEffect(() => {
  //  // useEffect에 등록하는 함수에 async를 붙이면 안된다
  //  // useEffect에서 리턴하는 함수는 뒷정리 함수이기 때문이다.
  //  // 따라서 useEffect에서 async를 쓰기 위해서는 함수를 따로 만들어주고 그 함수에 async를 붙여주어야 한다.
  //  const fetchData = async () => {
  //    setLoading(true)
  //    try {
  //      const query = category === 'home' ? '' : `&category=${category}`
  //      const response = await axios.get(
  //        ` https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7f1818750c44a07a4e2718c0f6ffb41`
  //      )
  //      setArticles(response.data.articles)
  //    } catch (e) {
  //      console.log(e)
  //    }
  //    setLoading(false)
  //  }
  //  fetchData()
  //}, [category])
  const [loading, response, error] = usePromise(() => {
    const query = category === 'home' ? '' : `&category=${category}`
    return axios.get(
      ` https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7f1818750c44a07a4e2718c0f6ffb41`
    )
  }, [category])

  if (loading) return <NewsListBlock>대기 중...</NewsListBlock>
  if (!response) return null
  if (error) return <NewsListBlock>에러발생!...</NewsListBlock>
  //if (!articles) return null
  const { articles } = response.data
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList
