export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

const getIsoDateTimeString = (date: Date | string) => {
  let dateval: Date
  if (typeof date == 'string') {
    dateval = new Date(date)
  } else dateval = date

  return `${dateval.getFullYear()}-${dateval.getMonth()}-${dateval.getDate()}T${dateval.getHours()}-${dateval.getMinutes()}`
}

const getIsoDateString = (date: Date | string) => {
  let dateval: Date
  if (typeof date == 'string') {
    dateval = new Date(Date.parse(date + 'Z'))
  } else dateval = date

  const datev = dateval.getDate()
  const month = dateval.getUTCMonth() + 1
  const year = dateval.getFullYear()

  const dateString = datev > 9 ? datev : `0${datev}`
  const monthString = month > 9 ? month : `0${month}`
  const yearString = year > 9 ? year : `0${year}`

  return `${yearString}-${monthString}-${dateString}`
}

const getIsoTimeString = (date: Date | string) => {
  let dateval: Date
  if (typeof date == 'string') {
    dateval = new Date(Date.parse(date + 'Z'))
  } else dateval = date

  const hours = dateval.getHours()
  const minutes = dateval.getMinutes()
  const hoursString = hours > 9 ? hours.toString() : `0${hours.toString()}`
  const minutesString =
    minutes > 9 ? minutes.toString() : `0${minutes.toString()}`
  return `${hoursString}:${minutesString}`
}

const geLocalDateString = (date: Date | string) => {
  let dateval: Date
  if (typeof date == 'string') {
    dateval = new Date(date)
  } else dateval = date

  return dateval.toLocaleDateString('en-IN')
}

const geLocalDateTimeString = (date: Date | string) => {
  let dateval: Date
  if (typeof date == 'string') {
    dateval = new Date(date)
  } else dateval = date

  return dateval.toLocaleString('en-IN', { hour12: false })
}

export const dateUtils = {
  getIsoDateString,
  geLocalDateString,
  getIsoDateTimeString,
  geLocalDateTimeString,
  getIsoTimeString,
}
