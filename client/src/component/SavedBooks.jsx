import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import API from '../utils/API'

function SavedBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    },[]) 

    console.log("State >>>>", books)

    function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
    }

    return (
        <div className="jumbotron">
            {books.length ? (
              <ul>
                {books.map(book => (
                  <li key={book._id}>
                      <img src={book.image} alt={book.title}/>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.authors}
                      </strong>
                    </Link>
                        <p>{book.description}</p>
                        <a href={book.link}>google books</a>
                    <button onClick={() => deleteBook(book._id)}>Delete</button>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    )
}

export default SavedBooks
