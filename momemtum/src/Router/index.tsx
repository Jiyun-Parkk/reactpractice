import { Login, SignUp } from 'page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/*<Route path='/' element={<Login />} />*/}
        <Route path='/' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
