import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        placeholder={placeholder}
        type="search"
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
