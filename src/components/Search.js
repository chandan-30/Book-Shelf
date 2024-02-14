import React from 'react'
import { FcSearch } from "react-icons/fc";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks, searchBooks } from '../store/book';

const Search = ({state}) => { // Functional component Search receiving state prop
    const inputRef = useRef(null); // Creating ref for input element.
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => { // Function to handle form submission.
        e.preventDefault();
        const value = inputRef.current.value;
        
        if ( !value ) {
            const data = JSON.parse(sessionStorage.getItem('books')); // Retrieving books data from sessionStorage.
            dispatch(setBooks(data)); // Dispatching action to set books data.
        }
        dispatch(searchBooks(value)); // Dispatching action to search books by title.
    }
  return (
    <form className="d-flex search-form">
        <input ref={inputRef} className="form-control me-2 search" type="search" list="datalistOptions" placeholder="Search" aria-label="Search" />
        <datalist id="datalistOptions">
            {
                state && state.map((book) => {
                    return (
                        <option key={book.id} value={book.title} />
                    )
                })
            }
        </datalist>
        <button className="btn btn-outline-success search-icon" type="submit" onClick={handleSubmit}>
            <FcSearch />
        </button>
    </form>
  )
}

export default Search