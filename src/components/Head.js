import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShowIcon from "./ShowIcon";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

const Head = ({ state, operation }) => {
  const sidebarState = (state) => {
    operation(!state);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar position="static">
          {console.log(state)}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => sidebarState(state)}
          >
            <ShowIcon state={state} />
          </div>
          &nbsp;
          <Typography variant="h6">LOGO</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Head;
