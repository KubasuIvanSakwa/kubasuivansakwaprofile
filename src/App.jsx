import { Suspense, lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Loader from './components/Loader'



function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Loader />}/>
    </Route>
  ))

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
