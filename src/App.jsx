import { Suspense, lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Loader from './components/Loader'
import Projects from './components/Projects'
import Projlayout from './components/Projlayout'
import Projectpage from './components/Projectpage'
const Layout = lazy(()=> import('./components/Layout'))
const WorkExperience = lazy(()=> import('./components/WorkExperience'))
const Skills = lazy(()=> import('./components/Skills'))
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
              <WorkExperience />
              <Skills />
              <Analytics />
            </>
          }
        />
          <Route path='projects' element={<Projlayout />}>
            <Route index element={<Projects />} />
            <Route path=':id' element={<Projectpage />} />
          </Route>
      </Route>
    </Route>
  ),
  { basename: "/" }
)

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
