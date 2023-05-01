import './App.css';
import React, { useState } from 'react';

import {
  InputGroup,
  Input,
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import axios from 'axios';

function App() {

  // States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');

  const requestQuery = () => {

    // Mostramos maximo 40 elementos resultado
    if (maxResults > 40 || maxResults < 1) {
      toast.error('Maximo 40 elementos para buscar');
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`).then(res => {

          // Mostrar resultados

        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  const mainHeader = () => {
    return (
      <div>
        <h1> Google Books </h1>
        <div>
          
          <InputGroup>
            <Input/>
              <Button>                            // Poner onClick = buscar
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
