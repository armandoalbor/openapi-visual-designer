import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormatClearOutlined } from "@mui/icons-material";

export const BasicSelect = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 140 }}>
      {/* <FormControl fullWidth size="small" variant="filled">
        <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Select
        sx={{ width: 1 }}
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
        size="small"
      >
        <MenuItem value={10}>
          <FormatClearOutlined fontSize="small" />
          Ten
        </MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* </FormControl> */}
    </Box>
  );
};
