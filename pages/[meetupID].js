import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"

import MeetupDetail from "../components/meetups/MeetupDetail.js"
export default function MeetupDetails(props) {
  return <>
    <Head>
      <title>{props.meetup.title} | React Meetups</title>
      <meta name="description" content={props.meetup.description} />
    </Head>
    <MeetupDetail {...props.meetup} />
  </>
}

export async function getStaticProps(context) {
  const client = new MongoClient('mongodb+srv://nate_db_user:9lB1URbG5CSXcZTW@cluster0.6zgybpk.mongodb.net/?appName=Cluster0')
  const db = client.db("test")
  const meetupsCollection = db.collection('meetups')
  const id = new ObjectId(context.params.meetupID)
  const meetup = await meetupsCollection.findOne({_id: id},{})
  client.close()
  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
        address: meetup.address
      }
    }
  }
}

export async function getStaticPaths() {
  const client = new MongoClient('mongodb+srv://nate_db_user:9lB1URbG5CSXcZTW@cluster0.6zgybpk.mongodb.net/?appName=Cluster0')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({},{_id: 1}).toArray()
  client.close()
  return {
    paths: meetups.map(el => ({params: {meetupID: el._id.toString()}})),
    fallback: "blocking"
  }
}