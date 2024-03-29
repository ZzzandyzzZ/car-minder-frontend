import { CarCreateForm } from '@car/components'
import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'

export default function CarCreatePage(): JSX.Element {
  return (
    <DashboardLayout>
      <CarCreateForm />
    </DashboardLayout>
  )
}
