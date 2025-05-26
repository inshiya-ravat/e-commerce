import { SearchStyled } from "./SearchStyled";
import { SearchIconWrapperStyled } from "./SearchIconWrapperStyled";
import { StyledInputBaseStyled } from "./StyledInputBaseStyled";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <SearchStyled>
      <SearchIconWrapperStyled>
        <SearchIcon />
      </SearchIconWrapperStyled>
      <StyledInputBaseStyled
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchStyled>
  );
};

export default Search;
