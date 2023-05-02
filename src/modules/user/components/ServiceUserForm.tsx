import { TextField } from '@mui/material'

export function ServiceUserForm(): JSX.Element {
  return (
    <>
      <TextField label="Nombre" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Apellidos" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Celular" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="DNI" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Email" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
    </>
  )
}
