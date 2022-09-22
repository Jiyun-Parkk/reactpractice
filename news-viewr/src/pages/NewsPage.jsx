import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import NewsList from '../components/NewsList'
import Categories from '../components/Categories'
import styled from 'styled-components'

const BackButton = styled.button`
  margin-top: 20px;
  font-size: 50px;
  cursor: pointer;
`

const NewsPages = () => {
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (params.nation && params.cetegory === undefined) {
      navigate(`/${params.nation}/all`)
    }
  }, [])

  const handleClickBack = () => {
    navigate('/')
  }
  return (
    <>
      <BackButton onClick={handleClickBack}>🏠</BackButton>
      <Categories />
      <NewsList params={params} />
    </>
  )
}

export default NewsPages
