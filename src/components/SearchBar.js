// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for a product name"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
