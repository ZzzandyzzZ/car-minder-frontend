import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'
import { ServiceCreationForm } from '@service/components'

export default function ServiceCreationPage(): JSX.Element {
  return (
    <DashboardLayout>
      <ServiceCreationForm />
    </DashboardLayout>
  )
}
