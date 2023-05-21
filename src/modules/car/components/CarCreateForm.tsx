import { Box, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setCarId } from '@slices/recordSlice'

const initialValues = {
  carId: '',
  brand: '',
  model: '',
  year: '',
  color: '',
  observations: '',
}
export function CarCreateForm(): JSX.Element {
  const dispatch = useAppDispatch()
  const { carId } = useAppSelector((state) => state.record)
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  const handleChange = (event): void => {
    dispatch(setCarId(event.target.value))
  }
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        label="Placa del carro"
        value={carId}
        inputProps={{ style: { textAlign: 'center' } }}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Marca"
        value={formik.values.brand}
        onChange={handleChange}
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
