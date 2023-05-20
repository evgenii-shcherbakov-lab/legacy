export type Replica = {
  Index: number,
  Text: string,
  Speaker: string,
  Type: string,
  [property: string]: any,
}

export type Attendee = {
  attendee: string,
  Name: string,
  email: string,
  is_host: boolean,
  [property: string]: any,
}

export type Data = {
  transcript: Replica[];
  attendees: Attendee[];
}
