// import './App.css';

import ContactForm from './components/Form/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Questions from './components/Form/Questions';

function App() {
  return (
    <div className="App">
      <Container>
        <ContactForm/>
        <Questions/>
      </Container>
    </div>
  );
}

export default App;
