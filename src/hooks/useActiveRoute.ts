import { useLocation } from 'react-router-dom';

export function useActiveRoute() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return { isActive };
}