import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../DefaultLayouts';
import { Home } from '../pages/Home/Home';
import { IssuePage } from '../pages/IssuePage/IssuePage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<IssuePage />} />
      </Route>
    </Routes>
  )
}