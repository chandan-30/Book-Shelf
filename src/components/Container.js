import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

import { useSelector } from 'react-redux';

const Container = () => {
    const state = useSelector(state => state.books.value);
    
  return (
    <>
        <Navbar />
        <main>
            <div className="container-fluid">
                <div className='row'>
                    {
                        state && state.map((book) => {
                            return (
                                <div className='col' key={book.id}>
                                    <Card book={book}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
        
    </>
  )
}

export default Container