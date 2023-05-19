import { useRouter } from 'next/navigation'
import { Box, Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useFormik } from 'formik'

const initialValues = {
  date: '',
  carId: '',
  user: '',
  service: '',
}
export function RecordCreationForm(): JSX.Element {
  const { push } = useRouter()
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <DatePicker label="Fecha" slotProps={{ textField: { fullWidth: true } }} />
      <TextField
        id="carId"
        label="Placa del carro"
        name="carId"
        value={formik.values.carId}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
        // disabled
        // onClick={() => {
        //   push('/dashboard/car/create')
        // }}
      />
      <TextField
        id="user"
        label="Dueño del carro"
        name="user"
        value={formik.values.user}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
        onClick={() => {
          push('/dashboard/user/create')
        }}
        disabled
      />
      <TextField
        id="service"
        label="Trabajo realizado"
        name="service"
        value={formik.values.service}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
        disabled
        onClick={() => {
          push('/dashboard/service/create')
        }}
      />
      <Button type="submit">Registrar</Button>
    </Box>
  )
}
