import { Box, Button, TextField, Typography } from '@mui/material'

export default function Home(): JSX.Element {
  return (
    <>
      <Box bgcolor="red" width={300} height={300}>
        <Typography color="white" variant="h4">
          HOLA A TODOS
        </Typography>
      </Box>
      <Button> HOLA</Button>
      <TextField label="INGRESA ALGO" />
    </>
  )
}
