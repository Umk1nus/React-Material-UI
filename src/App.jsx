import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import { Main } from './pages/Main';
import { About } from './pages/About';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Meal } from './pages/Meal';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route element={<NotFound/>}/>
            <Route path="/category/:name" element={<Category/>}/>
            <Route path="/meal/:id" element={<Meal/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
