import { Suspense, lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Loader from './components/Loader'
const Layout = lazy(()=> import('./components/Layout'))
const Hero = lazy(()=> import('./components/Hero'))



function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Hero />
            </>
          }
        >
        </Route>
      </Route>
    </Route>
  ))

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
