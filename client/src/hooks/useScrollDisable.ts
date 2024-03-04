import { useEffect } from 'react';

const useScrollDisable = (elem: any): any => {
  useEffect(() => {
    elem
      ? document.body.classList.add('overflow_hide')
      : document.body.classList.remove('overflow_hide');
  }, [elem]);
};

export default useScrollDisable;
