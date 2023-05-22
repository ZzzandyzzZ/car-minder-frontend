import { useRouter } from 'next/navigation'
import { Button } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'

import { CenteredInput } from '@ui/CenteredInput'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { initialState, setDate } from '@slices/recordSlice'
import { RecordInput } from './RecordInput'

export function RecordCreationForm(): JSX.Element {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const { carId, user, date } = useAppSelector((state) => state.record)
  const { carId: initCarId, user: initUser } = initialState
  return (
    <>
      <MobileDatePicker
        label={date != null ? 'Fecha' : null}
        value={new Date(date)}
        slotProps={{
          textField: {
            fullWidth: true,
            inputProps: { style: { textAlign: 'center' } },
            placeholder: 'Fecha',
          },
        }}
        onChange={(newValue: Date | null) => {
          dispatch(setDate(newValue?.getTime()))
        }}
      />
      <RecordInput
        value={carId}
        label={'Placa del carro'}
        initialValue={initCarId}
        redirect={'/dashboard/car/search'}
      />
      <RecordInput
        value={user}
        label={'Dueño del carro'}
        initialValue={initUser}
        redirect={'/dashboard/user/search'}
      />
      <CenteredInput
        placeholder="Trabajo realizado"
        onClick={() => {
          push('/dashboard/service/create')
        }}
      />
      <Button type="submit">Registrar</Button>
    </>
  )
}
