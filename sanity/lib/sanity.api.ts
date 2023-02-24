import { createClient } from 'next-sanity'

export const useCdn = process.env.NODE_ENV === 'production'; 

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'; 
    
export const apiVersion = '2022-11-15'; 

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn })