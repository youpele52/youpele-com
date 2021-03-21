import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Poetry from './pages/Poetry'
import Projects from './pages/Projects'

// import components
import Footer from './components/Footer'

// import Modal from './components/Modal'

function App() {
  return (
    // wrapping our app content with the router
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/poetry'>
          <Poetry />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        {/* <Route path='/cocktail/:id'>
          <SingleCocktail />
        </Route>
        <Route path='*'>
          <Error />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
