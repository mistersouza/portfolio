import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity/lib/sanity.api'
import { AboutMe } from '../../sanity/typings'

const query = groq`*[_type == "aboutMe"][0]`

type Data = {
    aboutMe: AboutMe
}   

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        const aboutMe: AboutMe = await sanityClient.fetch(query)
        res.status(200).json({ aboutMe })
    }
    