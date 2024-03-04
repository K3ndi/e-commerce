import { useState } from 'react';

interface useActiveProps {
  active: string;
  handleActive: (i: string) => void;
  activeClass: (i: string) => string;
}

const useActive = (initState: any): useActiveProps => {
  const [active, setActive] = useState(initState);

  const handleActive = (i: string): void => {
    setActive(i);
  };

  const activeClass = (i: string): string => {
    return active === i ? 'active' : '';
  };

  return { active, handleActive, activeClass };
};

export default useActive;
