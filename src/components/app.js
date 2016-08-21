import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.jsx';
import DataList from '../containers/data_list'
export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <DataList />
      </div>
    );
  }
}
