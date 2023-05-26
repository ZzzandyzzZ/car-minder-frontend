import { DashboardLayout } from '@layouts/dashboard/DashboardLayout'
import { UserSearchForm } from '@user/components'

export default function CarSearchPage(): JSX.Element {
  return (
    <DashboardLayout>
      <UserSearchForm />
    </DashboardLayout>
  )
}
