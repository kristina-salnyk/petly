import {Login, Register, Div, Auth} from './AuthNav.styled';

export const AuthNav = () => {

  return (

    <Div>
      <Auth>
        <Login>Login</Login>
        <Register>Registration</Register>
      </Auth>
        
    </Div>

  )
};
export default AuthNav;