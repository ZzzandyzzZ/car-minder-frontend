import { TextField } from '@mui/material'

export function CarCreationForm(): JSX.Element {
  return (
    <>
      <TextField label="Marca" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Modelo" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Año" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Color" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Observaciones" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
    </>
  )
}
