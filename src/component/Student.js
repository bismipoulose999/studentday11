import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Student() {
    return (
      <Grid container>
          <Grid item xs={12} sm={4} md={4}>

          </Grid>
          <Grid item xs={12} sm={4} md={4}>
              <Typography>Student App</Typography>
              <TextField
              variant="outlined"
              label="Name"
              margin="normal"
              fullWidth
              type="text"
              required
              />
              <TextField
              variant="outlined"
              label="Admission No"
              margin="normal"
              fullWidth
              type="text"
              required
              />
              <TextField
              variant="outlined"
              label="Roll No"
              margin="normal"
              fullWidth
              type="text"
              required
              />
              <TextField
              variant="outlined"
              label="College"
              margin="normal"
              fullWidth
              type="text"
              required
              />
              <TextField
              variant="outlined"
              label="Mobile"
              margin="normal"
              fullWidth
              type="number"
              required
              />
              <TextField
              variant="outlined"
              label="Email"
              margin="normal"
              fullWidth
              type="email"
              required
              />
              <TextField
              variant="outlined"
              label="password"
              margin="normal"
              fullWidth
              type="password"
              required
              />
              <Button
              variant="contained"
              color="primary"
              margin="normal"
              type="submit"
              fullWidth
              >SUBMIT</Button>

          </Grid>
          <Grid item xs={12} sm={4} md={4}>

          </Grid>

      </Grid>  
    )
}
