import { Autocomplete, TextField, createFilterOptions } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setCarId } from '@slices/recordSlice'
import { useRouter } from 'next/navigation'

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
const filter = createFilterOptions()

export function CarSearchForm(): JSX.Element {
  const { push } = useRouter()
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()
  const { carId } = useAppSelector((state) => state.record)
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-car-id"
        options={placasCarroPeru}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            dispatch(setCarId(newValue))
            push('/dashboard/car/create')
          } else if (newValue != null && newValue.inputValue) {
            dispatch(setCarId(newValue.inputValue))
            push('/dashboard/car/create')
          } else if (newValue != null) {
            dispatch(setCarId(newValue.label))
          }
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        value={carId}
        inputValue={inputValue}
        fullWidth
        noOptionsText="Placa no encontrada, regístrela"
        freeSolo
        filterOptions={(options, params) => {
          const filtered = filter(options, params)
          const { inputValue } = params
          const isExisting = options.some((option) => inputValue === option.label)
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              label: `Registrar nueva placa: "${inputValue}"`,
            })
          }

          return filtered
        }}
        renderInput={(params) => <TextField {...params} label="Ingrese placa" />}
      />
    </>
  )
}
