import { CarSearchForm } from '@car/components'
import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'

export default function CarSearchPage(): JSX.Element {
  return (
    <DashboardLayout>
      <CarSearchForm />
    </DashboardLayout>
  )
}
