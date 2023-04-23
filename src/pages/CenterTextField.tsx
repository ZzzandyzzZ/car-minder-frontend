import { TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

interface CenterTextFieldProps {
  label: string
}
export default function CenterTextField({ label }: CenterTextFieldProps): JSX.Element {
  const [labelWidth, setLabelWidth] = useState('fit-content')
  const labelRef = useRef<HTMLLabelElement>(null)

  const handleFocus = (): void => {
    setLabelWidth('100%')
  }

  const handleBlur = (): void => {
    setLabelWidth(`${labelRef?.current?.offsetWidth ?? 0 + 28}px`)
  }
  useEffect(() => {
    handleBlur()
  }, [labelRef])
  console.log(label, labelWidth)
  return (
    <TextField
      size="small"
      label={label}
      sx={{ width: labelWidth, transition: 'width 200ms linear' }}
      InputProps={{
        onFocus: handleFocus,
        onBlur: handleBlur,
      }}
      inputProps={{ style: { textAlign: 'center' } }}
      InputLabelProps={{ ref: labelRef }}
    />
  )
}
