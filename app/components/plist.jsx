import React from 'react';
import {get} from '../utils/ajax';

export default class Plist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"loading":false, "list": []};
  }

  componentDidMount() {
    this.setState({"firstView": true});
  }

  componentWillReceiveProps(nextProps) {
    let keyword = nextProps.keyword;
    this.setState({"loading": true, 'firstView': false});
    let url = `https://api.github.com/search/users?q=${keyword}`;
    get(url).then((data) => {
      this.setState({"loading":false, "list": data.items});
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    const imgStyle = {
      width: '100px'
    }
    if (this.state.firstView) {
      return (
        <h2>Enter name to search</h2>
      )
    }
    if (this.state.loading) {
      return (
        <h2>Loading result...</h2>
      );
    } else {
      if (this.state.list.length === 0) {
        return (
          <h2>No result.</h2>
        )
      } else {
        return (
          <div className="row">
            {this.state.list.map(people=>{
              return (
                <div className="card">
                  <img src={people.avatar_url} style={imgStyle}/>
                  <p className="card-text">
                    {people.login}
                  </p>
                </div>
              )
            })}
         </div>
       );
      }
    }
  }
}
