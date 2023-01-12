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
  Logo: SanityImage
  dateStarted: date
  dateEnded: date
  isCurrentWork: boolean
  title: string
  points: string[]
  skills: skill[]
}

export interface Image extends SanityDocument {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Project extends SanityDocument {
  _type: 'project'
  title: string
  image: SanityImage
  linkToProject: string
  skills: Skill[]
}

export interface Skill extends SanityDocument {
  _type: 'skill'
  image: SanityImage
  progress: number
  title: string
}

export interface AboutMe extends SanityDocument {
  heroImage: Image
  _type: 'aboutMe'
  address: string
  aboutMe: string
  email: string
  role: string
  name: string
  phoneNumber: string
  profileImage: Image
}

export interface SocialMedia extends SanityDocument {
  _type: 'socialMedia'
  title: string
  url: string
}
