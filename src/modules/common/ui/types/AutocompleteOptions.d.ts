interface AutocompleteOption {
  inputValue?: string
  label: string
  id: string
}
type NewAutocompleteOption = AutocompleteOption | string | null
