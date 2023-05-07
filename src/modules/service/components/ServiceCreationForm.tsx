import { TextField } from '@mui/material'

export function ServiceCreationForm(): JSX.Element {
  return (
    <>
      <TextField label="Tipo" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Autoparte" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
      <TextField label="Descripción" inputProps={{ style: { textAlign: 'center' } }} fullWidth />
    </>
  )
}
