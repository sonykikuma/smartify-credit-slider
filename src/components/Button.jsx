import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function CustomButton() {
  return (
    <Stack spacing={2} direction="row" sx={{ marginTop: 7 }}>
      {" "}
      <ColorButton variant="contained"> Confirm auto-purchase</ColorButton>
    </Stack>

    // <Stack spacing={2} direction="row">
    //   <Button variant="contained" color="secondary">
    //     Confirm auto-purchase
    //   </Button>
    // </Stack>
  );
}
