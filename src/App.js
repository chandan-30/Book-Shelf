import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setBooks } from './store/book';
import { Container } from './components';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    let data = JSON.parse(sessionStorage.getItem('books'));
    if ( !data ) {
      ( async () => {
        const res = await fetch('https://openlibrary.org/people/mekBot/books/already-read.json');
        data = await res.json();
        data = data['reading_log_entries'];
  
        data = data.map((book, index) => {
          return {
            'id': index,
            'cover': `https://covers.openlibrary.org/b/id/${book.work.cover_id}-M.jpg`,
            'title': book.work.title,
            'author': book.work.author_names,
            'year': book.work.first_publish_year,
            'is_read': false,
          }
        });
        sessionStorage.setItem('books', JSON.stringify(data));
        
      })();
    }
    

    dispatch(setBooks(data));
  },[]);

  const state = useSelector(state => state.books.value);

  return (
    <div className="App">
    <Container>
      Hello
    </Container>
    </div>
  );
}

export default App;
