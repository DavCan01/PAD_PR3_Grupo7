import logo from './logo.svg';
import './App.css';

import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';

function App() {

  const mainHeader = () => {
    return (
      <div>
        {/* Overlay */}
        <h1> Google Books </h1>

        <div>
          
          <InputGroup>
            <Input/>
              <Button>
                <i>Buscar</i>
              </Button>
          </InputGroup>

          <div>
            <FormGroup>
              <Label>Max Results</Label>
              <Input/>
            </FormGroup>

            <FormGroup>
              <Label>Start Index</Label>
              <Input/>
            </FormGroup>
          </div>

        </div>
      </div>
    );
  };


  // Return app
  return (
    <div>
    {mainHeader()}
    </div>
  );

}

export default App;
