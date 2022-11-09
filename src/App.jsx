// import Button from '@mui/material/Button';
import { Container, Grid } from "@mui/material";

import "./App.css";
import FormPosts from "./components/FormPosts";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <Container maxWidth={false} sx={{ paddingTop: "1rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <ListPosts />
        </Grid>
        <Grid item xs={4}>
          <FormPosts />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
