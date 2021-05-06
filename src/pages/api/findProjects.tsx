import connect from "../../services/database";

export default async function FindProjects(req, res) {
    if (req.method === 'GET') {        
        const { origin } = req.body

        const { db } = await connect()

        if (!origin) {
            const response = await db.collection('Projects').find().toArray()
            res.status(200).json(response)
            return
        }

        const response = await db.collection('Projects').find({ origin }).toArray()
        res.status(200).json(response)
    } else {
        res.status(400).json({ error: 'Wrong request method' })
    }
}