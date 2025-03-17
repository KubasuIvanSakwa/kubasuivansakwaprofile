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
import Blog from './components/Blog'
import Blogcontent from './components/Blogcontent'
import Bloglayout from './components/Bloglayout'
import Jump from './components/Jump'
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
          element={<Jump />}
        />
          <Route path='projects' element={<Projlayout />}>
            <Route index element={<Projects />} />
            <Route path=':id' element={<Projectpage />} />
          </Route>
          <Route path='blog' element={<Bloglayout />} >
            <Route index element={<Blog />} />
            <Route path=':id' element={<Blogcontent />} />
          </Route>
          <Route path='*' element={() => <h1>Page not found</h1>} />
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
