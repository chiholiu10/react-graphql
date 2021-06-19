import { FC, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import Character from './components/Character/Character';
import { Page404 } from './components/Page404/Page404';
import { useDispatch } from "react-redux";
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";
import { getData } from "./actions/index";
import { Route, Switch } from "react-router-dom";
import history from "./history";
import theme from "./styles/Themes";

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        history.push({
          pathname: '/404'
        });
        throw response;
      })
      .then(data => {
        dispatch(getData(data.results));
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characters/:id" component={Character} />
        <Route path="" component={Page404} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
