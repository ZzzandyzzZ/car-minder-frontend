import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'
import { UserCreationForm } from '@user/components'

export default function index(): JSX.Element {
  return (
    <DashboardLayout>
      <UserCreationForm />
    </DashboardLayout>
  )
}
