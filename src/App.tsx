import { BlogContextProvider } from './context/BlogContext';
import { Body } from './components/Body';

export function App() {


  return (
    <BlogContextProvider>
      <Body />
    </BlogContextProvider>
  );
}

