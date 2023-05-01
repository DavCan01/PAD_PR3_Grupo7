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
import { ToastContainer, toast } from 'react-toastify';

function App() {

  // Variables
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
      <div class="container">
        <div class="row mt-5">
          <div class="col-12 text-center">
            <h1> Google Books </h1>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-auto">
            <InputGroup>
              <Input />
              <Button onClick={requestQuery}>
                <i>Buscar</i>
              </Button>
            </InputGroup>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-auto">
            <FormGroup>
              <Label>Max Results</Label>
              <Input
                id='maxResults'
                type='number'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-auto">
            <FormGroup>
              <Label>Start Index</Label>
              <Input
                id='startIndex'
                type='number'
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
      </div>

    );
  };

  // Return app
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

      {mainHeader()}

    </div>
  );
}

export default App;
