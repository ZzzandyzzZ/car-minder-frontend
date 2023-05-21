import { useRouter } from 'next/navigation'
import { Box, Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { CenteredInput, CenteredDatePicker } from 'modules/common/ui/CenteredInput'

const initialValues = {
  date: '',
  carId: '',
  user: '',
  service: '',
}
export function RecordCreationForm(): JSX.Element {
  const { push } = useRouter()
  const { carId, user, service } = useSelector((state) => state.record)
  return (
    <>
      <DatePicker
        label={carId != null ? 'Fecha' : null}
        slotProps={{
          textField: {
            fullWidth: true,
            inputProps: { style: { textAlign: 'center' } },
            placeholder: 'Fecha MM/DD/YY',
          },
        }}
      />
      <CenteredInput
        placeholder="Placa del carro"
        value={carId}
        label={carId != null ? 'Placa del carro' : null}
        onClick={() => {
          push('/dashboard/car/search')
        }}
      />
      <CenteredInput
        id="user"
        label="Dueño del carro"
        name="user"
        value={user}
        onClick={() => {
          push('/dashboard/user/create')
        }}
        disabled
      />
      <CenteredInput
        label="Trabajo realizado"
        value={service}
        disabled
        onClick={() => {
          push('/dashboard/service/create')
        }}
      />
      <Button type="submit">Registrar</Button>
    </>
  )
}
