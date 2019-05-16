import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Group from './Group'

const itens = [
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "1"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "1"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "2"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "2"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "2"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "2"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "2"
  },

  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "3"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "3"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "3"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "3"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "3"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "3"
  },

  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  }
  ,
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  },
  {
    "image": "",
    "name": "Alexandre Pontes",
    "email": "alexandrelopespontes@gmail.com",
    "group": "4"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="Body">
        <Group title={"Lorem"} itens={itens.filter(item => '1' === item.group)} />
        <Group title={"Ipsum"} itens={itens.filter(item => '2' === item.group)} />
        <Group title={"Dolor"} itens={itens.filter(item => '3' === item.group)} />
        <Group title={"Sit"} itens={itens.filter(item => '4' === item.group)} />
      </body>
    </div>
  );
}

export default App;
