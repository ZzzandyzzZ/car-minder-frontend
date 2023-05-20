import { Box, TextField } from '@mui/material'
import { useFormik } from 'formik'

const initialValues = {
  brand: '',
  model: '',
  year: '',
  color: '',
  observations: '',
}
export function CarCreationForm(): JSX.Element {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        id="brand"
        name="brand"
        label="Marca"
        value={formik.values.brand}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
      />
      <TextField
        id="model"
        label="Modelo"
        name="model"
        value={formik.values.model}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
      />
      <TextField
        id="year"
        label="Año"
        name="year"
        value={formik.values.year}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
      />
      <TextField
        id="color"
        label="Color"
        name="color"
        value={formik.values.color}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
      />
      <TextField
        id="observations"
        label="Observaciones"
        name="observations"
        value={formik.values.observations}
        onChange={formik.handleChange}
        error={true}
        helperText="requerido"
        inputProps={{ style: { textAlign: 'center' } }}
        fullWidth
      />
    </Box>
  )
}
