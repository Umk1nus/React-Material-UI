import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import { Main } from './pages/Main';
import { About } from './pages/About';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { CardContent } from './pages/CardContent';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route element={<NotFound/>}/>
            <Route path="/main/:id" element={CardContent}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
