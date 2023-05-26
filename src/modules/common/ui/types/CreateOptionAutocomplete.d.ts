interface CreateOptionAutocompleteProps {
  id: string
  label: string
  newOptionMsg: string
  noOptionsText: string
  options: AutocompleteOption[]
  value: string
  onAddNew: () => void
  setValue: (newValue: string | null | undefined) => void
}
