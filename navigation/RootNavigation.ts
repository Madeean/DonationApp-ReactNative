// import { useSelector } from 'react-redux';
// import React from 'react';
// import { Authenticated, NonAuthenticated } from './NonAuthenticated';
//
// interface RootState {
//   user: {
//     isLoggedIn: boolean;
//   };
// }
//
// const RootNavigation: React.FC = () => {
//   const user = useSelector((state: RootState) => state.user);
//
//   // Pastikan user dan user.isLoggedIn terdefinisi sebelum digunakan
//   if (!user || user.isLoggedIn === undefined) {
//     console.error("User state is not properly defined");
//     return null; // atau Anda bisa menampilkan layar loading atau error
//   }
//
//   return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
// };
//
// export default RootNavigation;
