import React from 'react';
import './styles/BookResults.css';
import { useEffect } from 'react';

function BookResults(props) {
  const { bookCount, accountBookCount } = props.books;
  useEffect(() => {
    console.log(props.books);
  });
  return (
    <div className='main'>
      {bookCount ? (
        <div className='wave-results'>
          <div>
            <h4>
              Your Books: <span> {accountBookCount} </span>
            </h4>
          </div>
          <div>
            <h4>
              Total Books: <span> {bookCount} </span>
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BookResults;