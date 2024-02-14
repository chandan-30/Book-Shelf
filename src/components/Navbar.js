import React from 'react';
import './styles/navbar.css';
import { useSelector } from 'react-redux';
import Search from './Search';

const Navbar = () => {
    const state = useSelector(state => state.books.value);

  return (
    <>
        <nav className="navbar navbar-light ">
            <div className="container-fluid">
                <h1>
                    Book Shelf
                </h1>
                <Search state={state} />
            </div>
        </nav>
    </>
  )
}

export default Navbar