import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home(): void {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard/record/create').catch(console.log)
  }, [router])
}
