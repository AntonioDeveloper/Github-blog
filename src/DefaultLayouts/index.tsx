import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styles';
import { IssuePage } from '../pages/IssuePage/IssuePage';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}