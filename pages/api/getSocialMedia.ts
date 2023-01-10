import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { sanityClient } from '../../lib/sanity.api'

import { SocialMedia } from '../../sanity/typings'

const query = groq`*[_type == "socialMedia"]`

type Data = {
    socialMedia: SocialMedia[]
}   

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        const socialMedia: SocialMedia[] = await sanityClient.fetch(query)
        res.status(200).json({ socialMedia })
    }
    