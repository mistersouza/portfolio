import { Experience } from "../sanity/typings";

export const fetchExperiences = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const data = await response.json(); 
    const experiences: Experience[] = data.experiences; 

    // console.log({ pageInfo }); 
    
    return experiences; 
}