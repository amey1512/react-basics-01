import React from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';


class App extends React.Component{ 
   
  state = {
    news: JSON,
    filtered:[]  
  }
  
  getFilter = (event) => {
    let filtered = this.state.news.filter((item)=> {
      return item.title.indexOf(event.target.value) > -1 
    });

    this.setState({
      filtered:filtered
    });

  }

  render() {
    return  <div> 
              <Header method={this.getFilter}/>
              <NewsList news={this.state.filtered.length === 0 ? this.state.news:this.state.filtered}/> 
            </div>
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));