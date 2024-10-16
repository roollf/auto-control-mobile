import { Redirect } from "expo-router"
import { useSession } from "@/contexts/ctx" // Example of using authentication context

export default function Index() {
  const { session } = useSession()

  if (!session) {
    return <Redirect href="/landing" />
  }

  return <Redirect href="/dashboard/home" />
}
