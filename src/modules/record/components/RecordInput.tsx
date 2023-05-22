import { useRouter } from 'next/navigation'

import { CenteredInput } from '@ui/CenteredInput'

export function RecordInput({ value, initialValue, label, redirect }): JSX.Element {
  const { push } = useRouter()
  return (
    <CenteredInput
      placeholder={label}
      value={value}
      label={value === initialValue ? null : label}
      onClick={() => {
        push(redirect)
      }}
    />
  )
}
