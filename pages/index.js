import { MongoClient } from "mongodb"
import Head from "next/head"
import MeetupList from "../components/meetups/MeetupList.js"

export default function HomePage(props) {
  return <>
    <Head>
      <title>Home | React Meetups</title>
      <meta name="description" content="View and create meetups for others to join" />
    </Head>
    <MeetupList meetups={props.meetups} />
  </>
}

export async function getStaticProps() {
  const client = new MongoClient('mongodb+srv://nate_db_user:9lB1URbG5CSXcZTW@cluster0.6zgybpk.mongodb.net/?appName=Cluster0')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map(el => {
        return {
          title: el.title,
          image: el.image,
          address: el.address,
          description: el.description, 
          id: el._id.toString()
        }
      })
    },
    revalidate: 10
  }
}