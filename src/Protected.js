import 
    React
    , { useEffect } from 'react';

import { Auth } from 'aws-amplify';
import Container from './Container';

const Protected = ({history}) => {

  useEffect(
    () => {

      const checkUser = async () => {
        try{
          await Auth.currentAuthenticatedUser();
          console.log("User was authenticated ! ! !");
        }
        catch (err) {
          console.error(err);
          history.push('/profile');
        }
      };
      
      checkUser();
    }
    , []
  );

  return (
    <Container>
      <h1>
          Protected route
      </h1>
    </Container>
  );
}

export default Protected;