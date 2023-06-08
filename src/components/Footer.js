import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Footer = ({ maxWidth }) => {
  return (
    <Box sx={{ maxWidth: maxWidth, backgroundColor: "gray" }}>
      <Typography variant="subtitle2">All rights reserved to © LGC</Typography>
    </Box>
  );
};

export default Footer;
