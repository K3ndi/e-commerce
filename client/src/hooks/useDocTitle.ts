import { useEffect } from 'react';

const useDocTitle = (title: string): any => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - Tech Zone`;
    } else {
      document.title = 'Tech Zone | The Perfect Tech Store';
    }
  }, [title]);

  return null;
};

export default useDocTitle;
