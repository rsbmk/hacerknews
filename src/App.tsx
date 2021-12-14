import './App.css'
import { HeadProvider as ReactHeadProv } from 'react-head'
import { Route, Switch, useLocation, useRoute } from 'wouter'
import { SWRConfig } from 'swr'

import { localStorageProvider } from './hooks/utils/localStorProvider'

import { AllNews } from './pages/all'
import { Default404 } from './pages/default404'
import { Faves } from './pages/faves'

import { Header } from './components/header'
import { Nav } from './components/nav'

import { FaveContextProvider } from './context/favesProvider'

function App () {
  const [match, _] = useRoute('/all') // eslint-disable-line no-unused-vars
  const [location, setLocation] = useLocation()

  if (location === '/') setLocation('/all')

  return (
    <>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <Header />
        <Nav isActive={match} />
        <ReactHeadProv>
          <FaveContextProvider>
            <Switch>
              <Route path="/all" component={AllNews} />
              <Route path="/faves" component={Faves} />
              <Route>
                <Default404 />
              </Route>
            </Switch>
          </FaveContextProvider>
        </ReactHeadProv>
      </SWRConfig>
    </>
  )
}

export default App
