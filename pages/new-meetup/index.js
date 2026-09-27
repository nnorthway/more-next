import NewMeetupForm from "../../components/meetups/NewMeetupForm.js"
import Layout from "../../components/layout/Layout.js"

export default function NewMeetupPage() {
  function formHandler(data) {
    console.log(data)
  }

  return <NewMeetupForm onAddMeetup={formHandler} />
}