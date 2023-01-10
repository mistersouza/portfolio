import { SocialMedia } from "../sanity/typings";

export const fetchSocialMedia = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocialMedia`)
    const data = await response.json(); 
    const socialMedia: SocialMedia[] = data.socialMedia; 

    // console.log({skills}); 
    
    return socialMedia; 
}