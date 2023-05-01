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
import BookCard from './BookCard.jsx';

function App() {

  // Variables
  const [maxResults, setMaxResults] = useState(10);
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([]);

  const requestQuery = () => {

    // Mostramos maximo 40 libros
    if (maxResults > 40 || maxResults < 1) {
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`).then(res => {

        // Mostrar resultados
        console.log(res.data.items);
        setCards(res.data.items);

      })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  const mainHeader = () => {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1> Google Books </h1>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <InputGroup>
              <Input 
              placeholder = "Inserta un título"
              value = {query}
              onChange = {a => setQuery(a.target.value)}
              />
              <Button onClick={requestQuery}>
                <i>Buscar</i>
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <FormGroup>
              <Label>Nº de resultados máximo</Label>
              <Input
                max='40'
                id='maxResults'
                type='number'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
      </div>

    );
  };

  const handleCards = () => {
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      );
  };

  // Return app
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

      {mainHeader()}
      {handleCards()}
    </div>
  );
}



export default App;
