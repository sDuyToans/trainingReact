import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.scss";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReactForm from './pages/ReactForm/ReactForm';
import Page404 from './pages/Page404/Page404';
import ReactLifecycle from './pages/ReactLifecycle/ReactLifecycle';
// Cài đặt Redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoTangGiamSL from './pages/DemoRedux/DemoTangGiamSL';
import DemoChonXe from './pages/DemoRedux/DemoChonXe';
import DemoFormComment from './pages/DemoRedux/DemoFormComment/DemoFormComment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='reactform' element={<ReactForm/>}/>
            <Route path='lifecycle' element={<ReactLifecycle/>}/>
            {/* <Route path='*' element={<Page404/>}/> */} 
            <Route path='*' element={<Navigate to=""/>}/> {/* Tự động chuyển về trang chủ */}
            <Route path='demonumber' element={<DemoTangGiamSL/>}/>
            <Route path='demochonxe' element={<DemoChonXe/>}/>
            <Route path='demoformcomment' element={<DemoFormComment/>}/>
          </Route>
          
        </Routes>
  </BrowserRouter>
  </Provider>
);

//jsx

reportWebVitals();
