import { TextField } from '@mui/material'
import { styled } from '@mui/system'
import { DatePicker } from '@mui/x-date-pickers'

export const CenteredInput = styled(TextField)`
  && {
    input {
      text-align: center;
      caret-color: transparent;
      cursor: pointer;
    }
    width: 100%;
  }
`
export const CenteredDatePicker = styled(DatePicker)`
  && {
    input {
      text-align: center;
      caret-color: transparent;
      cursor: pointer;
    }
    width: 100%;
  }
`
