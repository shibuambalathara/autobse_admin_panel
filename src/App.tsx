// App.tsx
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/login';
import Header from './components/header';
import Sidebar from './components/sidebar';
import ProtectedRoutes from "./utils/protectedRoute";
import { Home } from './pages/home';
import Users from './pages/Users';
import AddUser from './components/user/addUser';
import UserDetails from './pages/userDetails';
import Sellers from './pages/sellers';
import SellerEdit from './pages/sellerAdd';
import AddSeller from './components/Sellers/addSeller';
import ViewLocations from './pages/viewLocations';
import AddPaymentForUser from './pages/addPayment';
import AddPaymentDetails from './pages/addPaymentDetails';
import PaymentUserDetails from './pages/paymentUserDetails';
import Payments from './pages/payments';

const App: React.FC = () => {
  const location = useLocation();
  const isProjectorView = location.pathname.startsWith('/projecter-view/');
  const isLoginPage = location.pathname.startsWith('/login');

  return (
    <>
      {!isProjectorView && <Header />}
      <div className="flex w-full">
        {!isProjectorView && !isLoginPage && <Sidebar />}
       
        <Routes>
        <Route path="login" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="add-user" element={<AddUser />} />
              <Route path="view-user/:id" element={<UserDetails />} />

              <Route path="sellers" element={<Sellers />} />
              <Route path="edit-seller/:id" element={<SellerEdit />} />
              <Route path="add-seller" element={<AddSeller />} />

              <Route path="viewlocation" element={<ViewLocations />} />

              <Route path="payment" element={<Payments />} />
              <Route path="create-payment/:id" element={<AddPaymentForUser />} />
              <Route path="update-payment/:id" element={<AddPaymentDetails />}/>
              {/* <Route path="payment/:id" element={<PaymentUserDetails />} /> */}
              </Route>
              </Routes>
          {/* Your routes and other components go here */}
        </div>
     
    </>
  );
};

export default App;
