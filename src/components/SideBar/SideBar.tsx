import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const SideBar = () => {
  return (
    <Stack
      direction="column"
      sx={{ padding: "1rem", backgroundColor: "#e9f5f7" }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
        Filters
      </Typography>
      <Box>
        <Typography sx={{ fontWeight: "bold" }} variant="body1">
          Sort by Price
        </Typography>
        <RadioGroup>
          <FormControlLabel
            control={<Radio checked={false} />}
            label="High to Low"
          />
          <FormControlLabel
            control={<Radio checked={false} />}
            label="Low to High"
          />
        </RadioGroup>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }} variant="body1">
          Date Range
        </Typography>
        <Box>
          <Typography variant="body2">From</Typography>
          <TextField type="date" />
        </Box>
        <Box>
          <Typography variant="body2">To</Typography>
          <TextField type="date" />
        </Box>
      </Box>
    </Stack>
  );
};

export default SideBar;
