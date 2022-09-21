import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import NewsList from '../components/NewsList'
import Categories from '../components/Categories'
import styled from 'styled-components'

const NewsPages = () => {
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (params.nation && params.cetegory === undefined) {
      navigate(`/${params.nation}/all`)
    }
  }, [])
  //loading state
  const [loading, setLoading] = useState(false)
  // news state
  const [newsList, setNewsList] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      //loading true
      setLoading(true)
      try {
        const country = params.nation === 'korea' ? 'kr' : 'us'
        console.log(params.category)
        const query =
          params.category === 'all' ? '' : `&category=${params.category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}${query}&apiKey=b7f1818750c44a07a4e2718c0f6ffb41`
        )
        setNewsList(response.data.articles)
      } catch (e) {
        console.log(e)
      }
      //fetch 끝나고 false
      setLoading(false)
    }
    fetchData()
  }, [params.category])

  return (
    <>
      <Categories />
      <NewsList newsList={newsList} loading={loading} />
    </>
  )
}

export default NewsPages
