import createImageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from './sanity.api'

import {Image} from '../typings'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  // Check source image valid reference
  if (!source?.asset?._ref) {
    return undefined
  }
  return imageBuilder?.image(source)
}
