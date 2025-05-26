import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import type { ChangeEvent } from "react";

interface ViewTypeRadioProp {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const ViewTypeRadio = ({ value, handleChange }: ViewTypeRadioProp) => {
  return (
    <FormControl>
      <RadioGroup
        value={value}
        onChange={handleChange}
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
      >
        <FormControlLabel value="card" control={<Radio />} label="card" />
        <FormControlLabel value="list" control={<Radio />} label="list" />
      </RadioGroup>
    </FormControl>
  );
};

export default ViewTypeRadio;
