import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

import { AboutMe, Experience, Project, Skill, SocialMedia } from '../sanity/typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/getProjects'
import { fetchSocialMedia } from '../utils/fetchSocialMedia'
import { fetchAboutMe } from '../utils/fetchAboutMe'

type Props = {
  aboutMe: AboutMe
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socialMedia: SocialMedia[]
}

export default function Home({ 
    aboutMe,
    experiences,
    skills,
    socialMedia,
    projects }: Props) {

  return (
    <div className='bg-[#f5f5f5] text-gray-700 h-screen snap-y snap-mandatory overflow-scroll z-0'> 
      <Head>
        <title>mistersouza's</title>
      </Head>
      
      <Header social={socialMedia}/>

      {/* Hero */}
      <section className='snap-start' id="hero">
        <Hero info={aboutMe}/>
      </section>

      {/* About */}
      <section className='snap-center' id='about'>
        <About info={aboutMe}/>
      </section>

      {/* Work experience */}
      <section className='snap-center' id='experience'>
        <WorkExperience work={experiences} />
      </section>
      {/* Skills */}
      <section className='snap-start' id='skills'>
        <Skills skills={skills}/>
      </section>
      {/* Projects */}
      <section className='snap-center' id='projects'>
        <Projects practical={projects}/>
      </section>
      {/* Contact */}
      <section className='snap-center' id='contact'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky right-5 bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' 
              src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' 
              width={30} 
              height={30} 
              alt='Avatar'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutMe: AboutMe = await fetchAboutMe(); 
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const socialMedia: SocialMedia[] = await fetchSocialMedia(); 
  const projects: Project[] = await fetchProjects()

  return {
    props: {
      aboutMe,
      experiences,
      skills,
      socialMedia,
      projects
    }, 
    // revalidate: 1
  }
}