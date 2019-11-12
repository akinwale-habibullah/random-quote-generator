import React from 'react';
import axios from 'axios';
import QuoteComponent from './components/QuoteComponent';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quote: {}
    }
    
    this.makeHttpRequest = this.makeHttpRequest.bind(this);
    this.generateNewQuote = this.generateNewQuote.bind(this);
  }

  async makeHttpRequest(endpoint){
    let quote;
    try {
      quote = await axios.get(endpoint);
    } catch (error) {
      throw new Error('HTTP request failed. Please try again later');
    }
    return quote.data.quotes[0];
  }

  async generateNewQuote(e){
    e.preventDefault();
    const endpoint = 'https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=true';
    const quote = await this.makeHttpRequest(endpoint);
    this.setState((state, props) => ({ quote }))
  }

  componentDidMount(){
    let quote
    (async () => {
      quote = await this.makeHttpRequest('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=true');
      this.setState({
        quote
      });
    })();
  }

  render(){
    return (
      <div className="App">
          <QuoteComponent quote={this.state.quote} generateQuote={this.generateNewQuote}/>
      </div>
    );
  }
}

export default App;
