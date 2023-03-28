import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { BlogContextProvider } from './context/BlogContext';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router/Router';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogContextProvider>
          <Router />
        </BlogContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

