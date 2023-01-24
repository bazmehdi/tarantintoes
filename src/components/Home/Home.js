import React, {Component} from 'react';
import './Home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      shot: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('/shot')
      .then(res => res.json())
      .then(shot => this.setState({shot}, () => console.log('Data fetched..', shot)));
  }

  render() {
    return (
        <div className="home-wrapper">
          {this.state.shot.map((data) =>
            <div>
              <div key={data.id} id={data.image_id} onClick={this.fetchData} className="home-box" style={{backgroundImage: 'url(../../../images/' + data.shot_path + ')'}}>
                <div className="overlay"></div>
                <h3 className="desktop">{data.title} ({data.rel_date}) | {data.timestamp} </h3>
              </div>
              <h3 className="mobile">{data.title} ({data.rel_date}) | {data.timestamp}</h3>
            </div>
          )}
        </div>
    );
  }
}

export default Home;