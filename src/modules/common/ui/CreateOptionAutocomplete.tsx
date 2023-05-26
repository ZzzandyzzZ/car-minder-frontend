import { type SyntheticEvent, useState } from 'react'
import {
  Autocomplete,
  createFilterOptions,
  TextField,
  type FilterOptionsState,
} from '@mui/material'

const filter = createFilterOptions<AutocompleteOption>()

export function CreateOptionAutocomplete(props: CreateOptionAutocompleteProps): JSX.Element {
  const { onAddNew, setValue, id, options, label, newOptionMsg, noOptionsText, value } = props
  const [inputValue, setInputValue] = useState('')

  const onChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: NewAutocompleteOption
  ): void => {
    if (typeof newValue === 'string' || newValue === null) {
      setValue(newValue)
    } else if ('inputValue' in newValue) {
      setValue(newValue.inputValue)
      onAddNew()
    } else {
      setValue(newValue.label)
    }
  }

  const onInputChange = (event: SyntheticEvent<Element, Event>, newInputValue: string): void => {
    setInputValue(newInputValue)
  }

  const filterOptions = (
    options: AutocompleteOption[],
    params: FilterOptionsState<AutocompleteOption>
  ): AutocompleteOption[] => {
    const filtered = filter(options, params)
    const { inputValue } = params
    const isExisting = options.some((option) => inputValue === option.label)
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        id: 'newValue',
        inputValue,
        label: `${newOptionMsg}: "${inputValue}"`,
      })
    }
    return filtered
  }

  return (
    <>
      <Autocomplete
        id={id}
        inputValue={inputValue}
        noOptionsText={noOptionsText}
        options={options}
        value={value}
        filterOptions={filterOptions}
        onChange={onChange}
        onInputChange={onInputChange}
        renderInput={(params) => <TextField {...params} label={label} />}
        disablePortal
        freeSolo
        fullWidth
      />
    </>
  )
}
