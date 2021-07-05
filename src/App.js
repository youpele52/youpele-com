import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, About, Poetry, Projects, Error, Test } from './pages'
import FantasySeventySevens from './pages/Poetry/FantasySeventySevens'
import Fiction from './pages/Poetry/Fiction'
import FictionSinglePoem from './pages/Poetry/Fiction/SinglePoem'
import FantasySinglePoem from './pages/Poetry/FantasySeventySevens/SinglePoem'

function App() {
  return (
    // wrapping our app content with the router
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/poetry'>
          <Poetry />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/test'>
          <Test />
        </Route>
        <Route exact path='/poetry/FantasySeventySevens'>
          <FantasySeventySevens />
        </Route>
        <Route path='/poetry/FantasySeventySevens/:id'>
          <FantasySinglePoem />
        </Route>
        <Route exact path='/poetry/Fiction'>
          <Fiction />
        </Route>
        <Route path='/poetry/Fiction/:id'>
          <FictionSinglePoem />
        </Route>
        <Route exact path='/*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
