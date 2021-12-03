import { useEffect, useState } from 'react';
import Home from './pages/home/home';
import CharecterDetail from './pages/charecters/charecterDetail';
import Episodes from './pages/episodes/episodes';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './components/styled/Global.styled';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppHeader from './components/Layout/header';
import { SearchContext } from './Context/SearchContext';

const theme = {
  colors: {
    header: '#2c2c2c',
    body: '#fff',
    footer: '#2c2c2c',
  }
}

function App() {
  const [serachQ, setSearchQ] = useState()
  const onSearch = (serach) => {
    setSearchQ(serach)
  }
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <AppHeader onSearch={onSearch} />
          <SearchContext.Provider value={serachQ}>
            <Switch>
            <Route exact path="/" component={Home}/>
              <Route  exact path="/character/:char_id" component={CharecterDetail}/>
              <Route  exact path="/episodes" component={Episodes}/>
            </Switch>
          </SearchContext.Provider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
