import { useRoutes, type RouteObject } from 'react-router-dom'
import { HeroPage, Overview } from './containers'
function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Overview />,
    },
    {
      path: 'hero',
      element: <HeroPage />,
      children: [
        {
          path: '/hero/:name',
          element: <HeroPage />,
        },
      ],
    },
  ]

  const element = useRoutes(routes)

  return element
}

export default App
