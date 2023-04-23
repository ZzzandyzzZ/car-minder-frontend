import { Box, Container, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          mt={20}
          flexDirection="column"
          gap={2}
          width="80%"
          bgcolor="whitesmoke"
          p={3}
          justifyContent="center"
          alignItems="center"
        >
          <DatePicker />
          <TextField label="Placa del carro" inputProps={{ style: { textAlign: 'center' } }} />
          <TextField label="Dueño del carro" inputProps={{ style: { textAlign: 'center' } }} />
          <TextField label="Trabajo realizado" inputProps={{ style: { textAlign: 'center' } }} />
        </Box>
      </Box>
    </Container>
  )
}
