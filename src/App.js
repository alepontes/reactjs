import React from 'react';
import './App.css';
import Group from './Group'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="Button" title="" onClick={() => this._getData()} >
            Request
          </button>
          <button className="Button" title="" onClick={() => this._createData()} >
            Criar Dados
          </button>

        </header>
        <body className="Body">
          <Group title={"Lorem"} itens={this.state.data.filter(item => '1' === item.group)} />
          <Group title={"Ipsum"} itens={this.state.data.filter(item => '2' === item.group)} />
          <Group title={"Dolor"} itens={this.state.data.filter(item => '3' === item.group)} />
          <Group title={"Sit"} itens={this.state.data.filter(item => '4' === item.group)} />
        </body>
      </div>
    );
  }


  _getData() {

    fetch('http://localhost:3001/list')
      .then(res => res.json())
      .then((data) => {
        this.setState({ data })
      })
      .catch(err => { })

  }

  _createData() {
    fetch('http://localhost:3001/create')
      .then(res => res.json())
      // .then((data) => {
      // this.setState({ data })
      // })
      .catch(err => { })
  }

}
