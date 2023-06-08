import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";

const Body = ({ state, operation }) => {
  return (
    <Grid container spacing={2} flexDirection="row">
      <Grid item xs={0} sm={3}>
        <Sidebar state={state} operation={operation} />
      </Grid>
      <Grid item xs={3} sm={9}></Grid>
    </Grid>
  );
};

export default Body;
