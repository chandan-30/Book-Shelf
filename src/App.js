import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setBooks } from './store/book';
import { Container } from './components';

function App() {

  const dispatch = useDispatch();

  useEffect( () => { // Fetching data when component mounts.
    let data = JSON.parse(sessionStorage.getItem('books'));
    if ( !data ) {
      ( async () => {
        const res = await fetch('https://openlibrary.org/people/mekBot/books/already-read.json');
        let data = await res.json();
        data = data['reading_log_entries']; // Extracting relevant data from response.
  
        data = data.map((book, index) => {
          if (!book.work.cover_id) {
            return null; // Skipping if cover ID doesn't exist.
          }
          
          return {
            'id': index,
            'cover': `https://covers.openlibrary.org/b/id/${book.work.cover_id}-M.jpg`,
            'title': book.work.title,
            'author': book.work.author_names,
            'year': book.work.first_publish_year,
            'is_read': false,
          }
        });
        data = data.filter((book) => book); // Filtering out null values.
        sessionStorage.setItem('books', JSON.stringify(data)); // Storing transformed data in sessionStorage.
        
      })();
    }
    dispatch(setBooks(data)); // Dispatching action to set books data in Redux store.
  },[]);

  const state = useSelector(state => state.books.value);

  return (
    <div className="App">
      <Container>
      </Container>
    </div>
  );
}

export default App;
