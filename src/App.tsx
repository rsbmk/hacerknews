import { Route, Switch, useLocation, useRoute } from 'wouter'
import './App.css'

import { localStorageProvider } from './hooks/utils/localStorProvider'

import { AllNews } from './pages/all'
import { Faves } from './pages/faves'

import { Header } from './components/header'
import { Nav } from './components/nav'
import { SWRConfig } from 'swr'
import { Default404 } from './pages/default404'

function App () {
  const [match, _] = useRoute('/all') // eslint-disable-line no-unused-vars
  const [location, setLocation] = useLocation()

  if (location === '/') setLocation('/all')

  return (
    <>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <Header />
        <Nav isActive={match} />
        <Switch>
          <Route path="/all" component={AllNews} />
          <Route path="/faves" component={Faves} />
          <Route><Default404 /></Route>
        </Switch>
      </SWRConfig>
    </>
  )
}

export default App
