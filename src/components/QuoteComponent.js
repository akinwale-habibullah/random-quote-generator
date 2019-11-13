import React from 'react';
import './QuoteComponent.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const QuoteComponent = (props) => {
  return (
    <div>
      <div className="quote-div">
        <p id="quote-string">
          <i className="fas fa-quote-left"></i>  
          {props.quote.quote}
          <br />
          <br />
          <span id="author">
            - {props.quote.author ? props.quote.author : 'Unknown'}
          </span>
        </p>
      </div>
      <div className="controls-div">
        <button 
          id="new-quote"
          onClick={props.generateQuote}>
          New Quote
        </button>
        <div id="share">
          <a href={`https://twitter.com/intent/tweet?text=${props.quote.quote}-${props.quote.author}`}><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  )
}

export default QuoteComponent;