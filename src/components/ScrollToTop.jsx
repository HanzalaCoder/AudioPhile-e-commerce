import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // Scroll to the top of the page whenever the route changes
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
  export default ScrollToTop;