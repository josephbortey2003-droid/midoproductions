import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On navigation, jump to the #section if one is given, otherwise to the top.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
