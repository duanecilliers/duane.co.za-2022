import { atomWithStorage } from 'jotai/utils'
import { ContributionsData } from '../utils/github'

const contributionsAtom = atomWithStorage<{ lastFetched: number | null; contributions: ContributionsData | null }>(
  'contributions',
  {
    lastFetched: null,
    contributions: null,
  },
)

export default contributionsAtom
