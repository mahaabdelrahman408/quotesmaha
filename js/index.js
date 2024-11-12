
const arrayOfQuotes = [
  {'author': 'Frank Sinatra', 
   'quote': 'The best revenge is massive success.'
  },
  {'author': 'Marcus Tullius Cicero', 
   'quote': 'A room without books is like a body without a soul.'
  },
  {'author': 'Oscar Wilde', 
   'quote': 'Be yourself; everyone else is already taken.'
  },
  {'author': 'Maya Angelou', 
   'quote': 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
  },
  {'author': ' Stephen Chbosky,', 
   'quote': 'We accept the love we think we deserve.'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'A friend is someone who knows all about you and still loves you.'
  },
];

function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
  
}
