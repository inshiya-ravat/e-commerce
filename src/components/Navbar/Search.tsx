import { SearchStyled } from "./SearchStyled";
import { SearchIconWrapperStyled } from "./SearchIconWrapperStyled";
import { StyledInputBaseStyled } from "./StyledInputBaseStyled";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router";
import { type ChangeEvent } from "react";
import { debounce } from "../../utils/debounce";

const Search = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const debouncedSearch = debounce(function handleSearchChange(e: ChangeEvent) {
    if (e.target instanceof HTMLInputElement) {
      setSearchParams({ search: e.target.value });
    }
  }, 1000);

  return (
    <SearchStyled>
      <SearchIconWrapperStyled>
        <SearchIcon />
      </SearchIconWrapperStyled>
      <StyledInputBaseStyled
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={debouncedSearch}
      />
    </SearchStyled>
  );
};

export default Search;
