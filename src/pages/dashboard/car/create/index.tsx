import { CarCreationForm } from '@car/components'
import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'

export default function CarCreationPage(): JSX.Element {
  return (
    <DashboardLayout>
      <CarCreationForm />
    </DashboardLayout>
  )
}
