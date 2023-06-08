import { useState } from "react";
import Grid from "@mui/material/Grid";

import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";

let maxWidth = 800;
let maxHeight = 1200;

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Grid container spacing={2} maxWith="sm" flexDirection="column">
        <Grid item>
          <Head state={sidebar} operation={toggle} />
        </Grid>
        <Grid item>
          <Body state={sidebar} operation={toggle} />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
