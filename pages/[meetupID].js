const DATA = {
  id: "m1",
  title: "First Event",
  image: "https://images.pexels.com/photos/18388935/pexels-photo-18388935.jpeg",
  address: "134 W 50th St, NY, NY 10020",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
import MeetupDetail from "../components/meetups/MeetupDetail.js"
export default function MeetupDetails() {
  return <MeetupDetail {...DATA} />
}