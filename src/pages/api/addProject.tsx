import connect from "../../services/database";

type AddProjectInfo = {
    name: string
    origin: string
    description: string
    details: string
    img: string
    githubLink: string
    designLink: string
    webLink: string
}

export default async function AddProject(req, res) {
    if (req.method === 'POST') {
        const {
            name,
            origin,
            description,
            details,
            img,
            githubLink,
            designLink,
            webLink
        }: AddProjectInfo = req.body

        if (!name || !origin || !description || !githubLink) {
            res.status(400).json({ error: "Missing body parameters" })
            return
        }

        const { db } = await connect()
        const response = await db.collection('Projects').insertOne({
            name,
            origin,
            description,
            details,
            img,
            githubLink,
            designLink,
            webLink
        })
        res.status(200).json(response.ops[0])
    } else {
        res.status(400).json({ error: 'Wrong request method' })
    }
}