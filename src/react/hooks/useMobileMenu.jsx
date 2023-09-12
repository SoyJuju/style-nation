import { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const useMobileMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width: 40.5em)');

  useEffect(() => {
    if (!isMobile) {
      setMobileMenu(false);
    }
  }, [isMobile]);

  return { mobileMenu, setMobileMenu };
};

export default useMobileMenu;
