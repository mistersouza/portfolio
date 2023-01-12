import { AboutMe } from "../sanity/typings";

export const fetchAboutMe = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutMe`)
    const data = await response.json(); 
    const aboutMe: AboutMe = data.aboutMe; 

    // console.log({ aboutMe }); 
    
    return aboutMe; 
}