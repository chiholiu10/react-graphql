import React, { useEffect } from 'react';
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
import axios from "axios";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        dispatch(getData(response.data.results));
      } catch (error) {
        history.push({
          pathname: '/404'
        });
      }
    };
    fetchData();
  }, [dispatch]);

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
