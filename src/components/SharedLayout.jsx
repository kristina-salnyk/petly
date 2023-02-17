import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { CloseModalIcon } from './icons/CloseModalIcon';
import theme from '../utils/theme';

export const SharedLayout = () => {
  return (
    <div>
      <CloseModalIcon color={theme.colors.black} size={40} />
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
