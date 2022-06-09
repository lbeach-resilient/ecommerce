import { gql } from '@apollo/client'

export const GET_SESSIONS = gql`
    query Sessions {
        sessions {
            id
            title
            description
            startsAt
            room
            day
            endsAt
            format
            level
            track
        }
    }
`

export const GET_SESSIONS_BY_ID = gql`
    query Sessions($sessionsById: ID!) {
        sessionsBy(id: $sessionsById) {
            id
            title
        }
    }
`
