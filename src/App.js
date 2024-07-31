import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage/AdminPage';
import './App.css';
import Layout from './components/Layout/Layout';
import Page from './components/Page/Page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Page page={'home'} />} />
          <Route path='/home' element={<Page page={'home'} />} />
          <Route path='/about' element={<Page page={'about'} />} />
          <Route path='/contacts' element={<Page page={'contacts'}/>} />
          <Route path='/pagefour' element={<Page page={'pagefour'}/>} />
          <Route path='/pagefive' element={<Page page={'pagefive'}/>} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='*' element={<div className='not-found'>NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;