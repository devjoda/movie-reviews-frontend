// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import SiteHeader from './components/SiteHeader'

// apollo client
const client = new ApolloClient({
  uri: 'http://joda-movie-reviews-backend.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <SiteHeader />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/api/details/:id' element={<ReviewDetails />} />
          <Route path='/api/categories/:id' element={<Category />} />
        </Routes>
      </ApolloProvider>
    </div>
  )
}

export default App
