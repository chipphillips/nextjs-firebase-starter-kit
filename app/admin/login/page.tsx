import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

export default async function AdminLoginPage() {
  const session = await getServerSession()
  
  if (session) {
    redirect('/@admin/dashboard')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    </div>
  )
}