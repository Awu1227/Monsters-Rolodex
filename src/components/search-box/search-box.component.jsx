import "./search-box.styles.css";
function SearchBox({ placeholder, onChangeHandler, className }) {
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type="search"
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
