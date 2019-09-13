import { useState, useEffect } from 'react'
import axios from 'axios'

export const FetchTeams = (initialUrl, initialTeams) => {
  const [teams, setTeams] = useState(initialTeams)
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchTeams = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)
        setTeams(result.data)
      } catch (err) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchTeams()
  }, [url])
  return [{ teams, isLoading, isError }, setUrl]
}
