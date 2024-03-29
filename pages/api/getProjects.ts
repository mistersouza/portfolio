import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity/lib/sanity.api'

import { Project } from '../../sanity/typings'

const query = groq`*[_type == "project"] {
    ...,
    skills[]->
}`

type Data = {
    projects: Project[]
}   

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        const projects: Project[] = await sanityClient.fetch(query)
        res.status(200).json({ projects })
    }
    