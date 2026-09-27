import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm.js"
import Layout from "../../components/layout/Layout.js"

export default function NewMeetupPage() {
  const router = useRouter()
  async function formHandler(data) {
    const response = await fetch('/api/new-meetup', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()
    console.log(result)
    router.push('/')
  }

  return <NewMeetupForm onAddMeetup={formHandler} />
}