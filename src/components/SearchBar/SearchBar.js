import {FormControl, Icon, OutlinedInput} from "@mui/material";
import "./SearchBar.scss";
function SearchBar() {
  return (
    <>
      <FormControl sx={{m: 1, width: "45ch"}} variant="outlined">
        <OutlinedInput
          id="filled-adornment-search"
          startAdornment={<Icon>search</Icon>}
          placeholder="Search"
        />
      </FormControl>
    </>
  );
}

export default SearchBar;
