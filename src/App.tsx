import { BrowserRouter } from "react-router-dom";
import { gql, useQuery, ApolloProvider } from '@apollo/client'
import { client } from "./lib/apollo";
import { Router } from "./Router";
import './styles/global.css'

export function App() {
  return (
    <div className="flex flex-col gap-12 max-w-xl mt-12 mx-auto px-4">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>

    </div>
  )
}
