type Session = {
  id: number
  title: string
  description: string
  startsAt: string
  room: string
  day: string
  endsAt: string
  format: string
  level: string
  track: string
}
type SessionsData = {
  sessions: Session[]
}
type SessionsByData = {
  sessionsBy: Session
}

type SessionsByVars = {
  sessionsById: string
}
