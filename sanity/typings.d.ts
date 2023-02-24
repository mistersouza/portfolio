import experience from './schemas/experience'

interface SanityDocument {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

export interface Experience extends SanityDocument {
  _type: 'experience'
  company: string
  logo: Image
  dateStarted: date
  dateEnded: date
  isCurrentWork: boolean
  title: string
  points: string[]
  technologies: skill[]
}

export interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Skill extends SanityDocument {
  _type: 'skill'
  icon: Image
  progress: number
  name: string
}

export interface AboutMe extends SanityDocument {
  _type: 'aboutMe'
  address: string
  bio: string
  email: string
  role: string
  name: string
  phoneNumber: string
  images: Image[]
}

export interface Project extends SanityDocument {
  _type: 'project'
  title: string
  image: Image
  linkToProject: string
  summary: string
  skills: Skill[]
}

export interface SocialMedia extends SanityDocument {
  _type: 'socialMedia'
  title: string
  url: string
}
