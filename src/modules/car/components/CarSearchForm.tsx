import { useRouter } from 'next/navigation'

import { CreateOptionAutocomplete } from '@ui'

import { setCarId } from '@slices/recordSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'

const placasCarroPeru = [
  { label: 'ABC-123', id: '1' },
  { label: 'DEF-456', id: '2' },
  { label: 'GHI-789', id: '3' },
  { label: 'JKL-012', id: '4' },
  { label: 'MNO-345', id: '5' },
  { label: 'PQR-678', id: '6' },
  { label: 'STU-901', id: '7' },
  { label: 'VWX-234', id: '8' },
  { label: 'YZA-567', id: '9' },
  { label: 'BCD-890', id: '10' },
]

export function CarSearchForm(): JSX.Element {
  const { carId } = useAppSelector((state) => state.record)
  const { push } = useRouter()
  const dispatch = useAppDispatch()

  return (
    <CreateOptionAutocomplete
      id="combo-box-car-id"
      label="Ingrese placa"
      newOptionMsg="Registrar nueva placa"
      noOptionsText="Placa no encontrada, regístrela"
      options={placasCarroPeru}
      onAddNew={() => {
        push('/dashboard/car/create')
      }}
      setValue={(value) => dispatch(setCarId(value))}
      value={carId}
    />
  )
}
