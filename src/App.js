import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, Protectroute } from './pages'
import {
  Profile,
  Addjob,
  Alljobs,
  Stats,
  SharedLayout,
} from './pages/Dashboard/'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Protectroute>
              <SharedLayout />
            </Protectroute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<Alljobs />} />
          <Route path='add-job' element={<Addjob />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='landing' element={<Landing />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App
