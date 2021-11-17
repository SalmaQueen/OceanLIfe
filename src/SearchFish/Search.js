import React from 'react'
import SearchBar from "material-ui-search-bar";
// *snip*

const Search=()=> {
    
return (
    <SearchBar
      value={this.state.value}
      onChange={(newValue) => this.setState({ value: newValue })}
      onRequestSearch={() => doSomethingWith(this.state.value)}
    />
  );
}

export default Search
