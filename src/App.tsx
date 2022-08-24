import { useRoutes, type RouteObject } from 'react-router-dom'
import { Overview } from './containers'
function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Overview />,
    },
  ]

  const element = useRoutes(routes)

  return element
}

export default App
