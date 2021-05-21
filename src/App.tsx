import React, { useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import Episodes from './components/Episodes/Episodes';
import { useDispatch } from "react-redux";
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";
import { getData } from "./actions/index";
import { Redirect, Route, Switch } from "react-router-dom";
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
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/characters/:id" render={() => <Episodes />} />
        <Route path="*" render={() => <Redirect to={{ path: "/" }} />} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
