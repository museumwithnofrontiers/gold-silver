import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'goldSilver',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Gold and Silver',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '0dab6a1c-e333-510c-8838-22f47404def3',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'aa69e40a-8b6f-5533-b199-6d9e6bc16fba',
    dynasty: {
      item: '4b991957-3850-5dff-ab19-d438bef7536d',
      name: 'Sassanids',
    },
    timeline: {
      code: 'uk',
      id: 'gbr',
      country: 'United Kingdom',
    },
    partner: {
      id: '6001ff30-e9b6-573e-a38c-5ac23b472e6c',
      name: 'Saint Louis Art Museum',
      city: 'Saint Louis',
      country: 'United States of America',
      objects: 1,
    },
  },
})
