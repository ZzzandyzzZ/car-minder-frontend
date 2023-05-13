import { RecordCreationForm } from '@record/components'
import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'

export default function RecordCreationPage(): JSX.Element {
  return (
    <DashboardLayout backButton={false}>
      <RecordCreationForm />
    </DashboardLayout>
  )
}
