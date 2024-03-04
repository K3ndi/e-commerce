import React from 'react';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <RouterRoutes />
      <Footer />
      <BackTop />
    </>
  );
};

export default App;
