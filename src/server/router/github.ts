import { createRouter } from './context'
import { z } from 'zod'
import fetch from 'node-fetch'
import { ContributionsData } from '../../utils/github'

async function getContributions(token: string, username: string): Promise<ContributionsData> {
  const headers = {
    Authorization: `bearer ${token}`,
  }
  const body = {
    query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      weekday
                      contributionLevel
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  }
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  })

  const data = await response.json()
  return data as ContributionsData
}

export const githubRouter = createRouter().query('contributions', {
  async resolve() {
    const contributions = await getContributions(
      process.env.GITHUB_ACCESS_TOKEN as string,
      process.env.GITHUB_USERNAME as string,
    )
    return {
      contributions,
    }
  },
})