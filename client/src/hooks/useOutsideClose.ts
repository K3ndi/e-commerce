import { useEffect } from 'react';

const useOutsideClose = (ref: any, handler: any): void => {
  useEffect(() => {
    const outsideClose = (e: any): any => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    window.addEventListener('mousedown', outsideClose);

    return () => {
      window.removeEventListener('mousedown', outsideClose);
    };
  }, [ref, handler]);
};

export default useOutsideClose;
