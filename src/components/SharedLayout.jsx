import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import Loader from './Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

SharedLayout.propTypes = {
  color: PropTypes.string,
};
