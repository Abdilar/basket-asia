/**
 * Convert the date to the format "yyyy-MM-dd"
 * @param date - A Date object
 * @returns - A string as a format "yyyy-MM-dd"
 */
export const toStringDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

/**
 * Convert the format "yyyy-MM-dd" to the date
 * @param date - A string as a "yyyy-MM-dd"
 * @returns - A Date object
 */
export const toDateString = (date: string) => {
  return new Date(date)
}
