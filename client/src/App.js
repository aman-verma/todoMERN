import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import PrivateRoute from './components/routing/PrivateRoute';

//layout
import Navbar from './components/layout/Navbar/Navbar';
import SideDrawer from './components/layout/SideDrawer/SideDrawer';
import Alert from './components/layout/Alert';

//pages
import About from './components/pages/About';
//import Home from './components/pages/Home';
import Tasks from './components/pages/Task/Tasks';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/pages/NotFound';

//redux
import { Provider } from 'react-redux';

//import store from './store';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import setAuthToken from './utils/setAuthToken';

if (localStorage.ckToken) {
  setAuthToken(localStorage.ckToken);
}

function App() {
  return (
    <BrowserRouter>
      {/* {!isAuthenticated && (
        <>
          <Navbar
            title='Learn React'
            drawerToggleClickHandler={drawerToggleClickHandler}
          />
          <SideDrawer show={sideDrawerOpen} />
        </>
      )} */}

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Alert />
          <Routes>
            {/* <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route
                path='tasks'
                element={
                  <PrivateRoute>
                    <Tasks />
                  </PrivateRoute>
                }
              />
              <Route
                path='about'
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path='*'
                element={
                  <PrivateRoute>
                    <NotFound />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

function Layout() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  let mainContainerClasses = 'mainContainer';
  if (sideDrawerOpen) {
    mainContainerClasses = 'mainContainer open';
  }

  return (
    <main>
      <Navbar
        title='Learn React'
        drawerToggleClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawerOpen} />
      <div className={mainContainerClasses}>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
