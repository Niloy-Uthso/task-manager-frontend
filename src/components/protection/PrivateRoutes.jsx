import React from 'react';
 import { Navigate, useLocation } from 'react-router';
import { ClipLoader } from 'react-spinners';
import useAuth from '../../hooks/userAuth';

const PrivateRoutes = ({children}) => {
    const {user,loading}= useAuth()
  const location = useLocation();
  console.log(location)
   if (loading) {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <ClipLoader color="#ba1676" size={50} />
    </div>
  );
}

    if(!user){
      console.log(location)
       return  <Navigate to={"/login"} state={{ from: location.pathname }}  >   </Navigate>
    }

    return children
};

export default PrivateRoutes;