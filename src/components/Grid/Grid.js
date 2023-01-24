import React, {Component} from 'react';
import './Grid.scss';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: []
    }
  }

  handleClick(e) {
    const movieId = e.currentTarget.id
    const title = e.currentTarget.textContent
    this.props.history.push('/' + movieId, {id: movieId, title: title});
  }

  componentDidMount() {
    fetch('/grid')
      .then(res => res.json())
      .then(grid => this.setState({grid}, () => console.log('Data fetched..', grid)));
  }

  render() {
    return (

        <main>
          <div className="wrapper">
          {this.state.grid.map(data =>
            <div key={data.id} onClick={e => this.handleClick(e)} id={data.id} className="box" style={{backgroundImage: 'url(../../../images/' + data.poster_path + ')'}}>
              <div className="overlay"></div>
              <h3>{data.title}</h3>
              <span style={{display: 'none'}}> ({data.rel_date})</span>
            </div>
          )}
          </div>
        </main>

    );
  }
}

export default Grid;