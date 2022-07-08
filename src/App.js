import './App.css';
import {Container,Row,Col} from 'react-bootstrap'
import Login from './components/Login'
import Signup from './components/Signup.jsx'
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import {UserAuthContextProvider} from './context/UserAuthContext'

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>

          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>

          <Route path="/" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
