import React from 'react';
import { Grid, Container } from "@material-ui/core"
import { Covid } from '../views/Covid';
import { Exchange } from '../views/Exchange';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Covid />
        </Grid>
        <Grid item xs={6}>
          <Exchange />
        </Grid>
      </Grid>
    </Container>
  );
};