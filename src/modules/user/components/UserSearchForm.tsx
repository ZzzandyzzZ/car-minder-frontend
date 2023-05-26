import { setUserData } from '@slices/recordSlice'
import { CreateOptionAutocomplete } from '@ui'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'store/hooks'

const DNIs = [
  { label: '1234567890', id: '1' },
  { label: '2345678901', id: '2' },
  { label: '3456789012', id: '3' },
  { label: '4567890123', id: '4' },
  { label: '5678901234', id: '5' },
  { label: '6789012345', id: '6' },
  { label: '7890123456', id: '7' },
  { label: '8901234567', id: '8' },
  { label: '9012345678', id: '9' },
  { label: '0123456789', id: '10' },
]

export function UserSearchForm(): JSX.Element {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { user } = useAppSelector((state) => state.record)
  return (
    <CreateOptionAutocomplete
      id="combo-box-user-id"
      label="Ingrese DNI"
      newOptionMsg="Registrar nuevo DNI"
      noOptionsText="Usuario no encontrado, regístrelo"
      options={DNIs}
      onAddNew={() => {
        push('/dashboard/user/create')
      }}
      setValue={(value) => dispatch(setUserData({ id: value, label: 'Andy Ñaca' }))}
      value={user.id}
    />
  )
}
