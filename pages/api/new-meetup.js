import { MongoClient } from "mongodb"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body
    const { title, image, address, description } = data
    
    const client = new MongoClient('mongodb+srv://nate_db_user:9lB1URbG5CSXcZTW@cluster0.6zgybpk.mongodb.net/?appName=Cluster0')
    const db = client.db()
    
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(data)
    
    console.log(result)
    client.close()
    
    res.status(201).json({message: "Meetup Inserted"})
  }
}