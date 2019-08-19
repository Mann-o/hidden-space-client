import { format } from 'date-fns'

/**
 * Format a date to any given format support by date-fns
 *
 * @param {string} date
 * @param {string} dateFormat
 * @returns {string}
 */
export const formatDate = (date, dateFormat) => {
  return format(new Date(date), dateFormat)
}
