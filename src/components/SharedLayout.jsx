import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Header } from './Header/Header';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
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
