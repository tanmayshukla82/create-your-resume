import logo from './logo.svg';
import './App.css';
import './static/scss/app.scss'
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { ChakraProvider } from "@chakra-ui/react";
import PersonalDetails from './Components/PersonalDetails';
import Education from './Components/Education';
import GettingStarted from './Components/GettingStarted';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <ChakraProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/personalDetail" element={<PersonalDetails />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/gettingStarted" element={<GettingStarted />}></Route>
            <Route path="/" exact element={<LandingPage />}></Route>
          </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
