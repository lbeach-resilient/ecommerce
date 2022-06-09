import { useQuery } from "@apollo/client"
import React from "react"
import { GET_SESSIONS, GET_SESSIONS_BY_ID } from "./queries"

export default function ExchangeRates() {
  // Graph QL
  const allSessions = useQuery<SessionsData>(GET_SESSIONS)
  const sessionsById = useQuery<SessionsByData, SessionsByVars>(
    GET_SESSIONS_BY_ID,
    {
      variables: { sessionsById: "84473" },
    }
  )

  // Derivation
  const session84473 = () => {
    const sessionsByIdData = sessionsById.data
    if (!sessionsByIdData) return
    const entries = Object.entries(sessionsByIdData.sessionsBy)

    return entries.map((entry, index) => {
      if (entry[0] === "__typename") return null
      return (
        <li key={index}>
          {entry[0]}: {entry[1] as string}
        </li>
      )
    })
  }

  if (allSessions.error) return <p>Error :(</p>
  if (sessionsById.error) return <p>Error sessionsById :(</p>
  if (!allSessions.data) return <p>Loading...</p>
  if (!sessionsById.data) return <p>Loading...</p>

  const amountOfSessions = allSessions.data.sessions.length

  return (
    <>
      <div>
        <p>Amount of sessions : {amountOfSessions}</p>
        <p> session : </p>
        <ul>{session84473()}</ul>
      </div>
    </>
  )
}
