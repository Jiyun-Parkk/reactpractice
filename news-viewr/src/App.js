import { Route, Routes } from 'react-router-dom'
//import NewsPage from './pages/NewsPage.jsx'
import Home from './pages/Home.jsx'
import NewsPage from './pages/NewsPage.jsx'
import GlobalStyle from './style/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {/*<Route path='/' element={<NewsPage />} />
        <Route path='/:category' element={<NewsPage />} />*/}
        <Route path='/' element={<Home />} />
        <Route path='/:nation' element={<NewsPage />} />
        <Route path='/:nation/:category' element={<NewsPage />} />
      </Routes>
    </>
  )
}

export default App
