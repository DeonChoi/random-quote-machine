import React from 'react';
import './App.css';
import twitterLogo from './images/twitter_logo.png';
import QuotesLogo from './QuotesLogo';


const myQuotes = [
  {
    quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    author: 'John Keats'
  },
  {
    quote: 'But man is not made for defeat. A man can be destroyed but not defeated.',
    author: 'Ernest Hemingway'
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    author: 'Franklin D. Roosevelt'
  },
  {
    quote: 'There is nothing permanent except change.',
    author: 'Heraclitus'
  },
  {
    quote: 'You cannot shake hands with a clenched fist.',
    author: 'Indira Gandhi'
  },
  {
    quote: 'Let us sacrifice our today so that our children can have a better tomorrow.',
    author: 'A.P.J. Abdul Kalam'
  },
  {
    quote: 'It is better to be feared than loved, if you cannot be both.',
    author: 'Niccolo Machiavelli'
  },
  {
    quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    author: 'Helen Keller'
  },
  {
    quote: 'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.',
    author: 'Oscar Wilde'
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle'
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    author: 'Maya Angelou'
  },
  {
    quote: "Find a place inside where there's joy, and the joy will burn out the pain.",
    author: 'Joseph Campbell'
  },
  {
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: 'Audrey Hepburn'
  }
];

const myColors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#A091BD', '#F8D1D5', '#83D0E0', '#BB4B9F', '#FACF9A', '#9B99FF', '#94D5FF', '#B7FFBD', '#FEFF8C', '#FFBBBA', '#FF8B93', '#8C2BAD', '#0870CB', '#04B390'];

class App extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      index: 0, //initially will display the first quote object in the myQuotes array
      color: '#FF9AA2' //initial primary color (background, text, etc)
    };
    this.newQuote = this.newQuote.bind(this);
   };

  newQuote(){
    this.setState({
         index: Math.floor(Math.random()*myQuotes.length),
         color: Math.floor(Math.random()*myColors.length)
    });
  }

  render () {
    return (
      <div>
        <div id='app' style={{backgroundColor:myColors[this.state.index]}}>
          <div id='quote-box' className=''>
            <div id='quote' className='' style={{color:myColors[this.state.index]}}>
              <QuotesLogo fillColor={myColors[this.state.index]}/>
              {myQuotes[this.state.index].quote}
            </div>
            <div id='author' className=''  style={{color:myColors[this.state.index]}}>-{myQuotes[this.state.index].author}</div>
            <a id='twitter' target='_blank' rel='noopener noreferrer' href='https://twitter.com/intent/tweet'>
              <img src={twitterLogo} alt='Twitter Logo' id='tweet-logo' style={{backgroundColor:myColors[this.state.index]}}></img>
            </a>
            <button id='new-quote' className='' style={{backgroundColor:myColors[this.state.index]}} onClick={this.newQuote}>New Quote</button>
          </div>
        </div>
        <div id='svg-credit' style={{backgroundColor:myColors[this.state.index]}}>Quotation icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
  
}

export default App;
