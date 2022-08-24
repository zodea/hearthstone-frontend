import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createClient, defaultExchanges, Provider } from 'urql'
import App from './App'

const client = createClient({
  url: 'http://localhost:3333/graphql',
  exchanges: [...defaultExchanges],
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={client}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
