import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'
const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
]

const CategoryBox = styled.div`
  width: 80%;
  margin: 50px 0;
  font-size: 18px;
  display: flex;
`

const Category = styled(NavLink)`
  margin-left: 20px;
  text-align: center;
  padding: 10px;
  &.active {
    background: #adddd0;
    color: #000;
    border-radius: 20px;
  }
`

const Categories = () => {
  const params = useParams()

  return (
    <CategoryBox>
      {categories.map((list) => (
        <Category to={`/${params.nation}/${list.name}`} key={list.name}>
          {list.text}
        </Category>
      ))}
    </CategoryBox>
  )
}

export default Categories
