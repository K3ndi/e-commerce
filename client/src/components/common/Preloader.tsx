import React, { useEffect, useState } from 'react';
import useScrollDisable from '../../hooks/useScrollDisable';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useScrollDisable(isLoading);

  useEffect(() => {
    const handleIsLoading = (): void => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleIsLoading);

    return () => {
      window.removeEventListener('load', handleIsLoading);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div id="preloader">
          <div className="loader"></div>
          <span className="loader_text">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Preloader;
