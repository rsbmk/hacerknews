import { Fragment } from 'react'
import { Route, useRoute } from 'wouter'
import './App.css'

import { AllNews } from './pages/all'
import { Header } from './components/header'
import { Nav } from './components/nav'
import { Faves } from './pages/faves'

function App () {
  const [match, _] = useRoute('/all') // eslint-disable-line no-unused-vars

  return (
    <Fragment>
      <Header />
      <Nav isActive={match}/>
      <Route path='/all' component={AllNews}/>
      <Route path='/faves' component={Faves}/>
    </Fragment>
  )
}

export default App
