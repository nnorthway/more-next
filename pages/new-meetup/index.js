import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm.js"
import Layout from "../../components/layout/Layout.js"
import Head from "next/head"

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

  return <>
    <Head>
      <title>Add a Meetup | React Meetups</title>
      <meta name="description" content="Add a new meetup" />
    </Head>
    <NewMeetupForm onAddMeetup={formHandler} />
  </>
}