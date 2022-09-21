import React from 'react'
import styled from 'styled-components'

const ListItems = styled.li`
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 3px;
  a {
    display: flex;
    width: 100%;
    height: auto;
    .thumbnail {
      flex-basis: 20%;
      width: 100%;
      height: 120px;
      text-align: center;
      line-height: 100px;
      color: #fff;
      background: ${(props) =>
        props.thumbnail
          ? `url(${props.thumbnail})no-repeat center/ cover`
          : 'gray'};
    }
    .content {
      padding-left: 20px;
      flex-basis: 80%;
      h3 {
        margin-bottom: 10px;
        color: #e8dfca;
      }
      p {
        width: 100%;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`

const NewsLists = ({ list }) => {
  const { url, title, urlToImage, description } = list
  return (
    <ListItems thumbnail={urlToImage}>
      <a href={url} target='_blank'>
        <div className='thumbnail'>{urlToImage ? '' : 'No Image'}</div>
        <div className='content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </ListItems>
  )
}

export default NewsLists
