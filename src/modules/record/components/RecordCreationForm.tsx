import { Box, Container, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useRouter } from 'next/navigation'
export function RecordCreationForm(): JSX.Element {
  const { push } = useRouter()
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        bgcolor="whitesmoke"
        p={3}
        justifyContent="center"
        alignItems="center"
      >
        <DatePicker label="Fecha" slotProps={{ textField: { fullWidth: true } }} />
        <TextField
          label="Placa del carro"
          inputProps={{ style: { textAlign: 'center' } }}
          fullWidth
          onClick={() => {
            push('/dashboard/car/create')
          }}
        />
        <TextField
          label="Dueño del carro"
          inputProps={{ style: { textAlign: 'center' } }}
          fullWidth
          InputLabelProps={{
            shrink: false,
          }}
          onClick={() => {
            push('/dashboard/user/create')
          }}
        />
        <TextField
          label="Trabajo realizado"
          inputProps={{ style: { textAlign: 'center' } }}
          fullWidth
          onClick={() => {
            push('/dashboard/service/create')
          }}
        />
      </Box>
    </Container>
  )
}
