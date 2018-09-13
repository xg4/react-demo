/**
 * @description format date
 * @param {Date | Number | String} date like date
 * @param {String} formatStr format string
 * @returns {String}
 */
export function formatDate(date: any, formatStr: string): string {
  date = new Date(date);

  const year = date.getFullYear();

  const [month, day, hour, minute, second] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ].map(value => (value < 10 ? "0" + value : value));

  switch (formatStr) {
    case "MM-dd":
      return `${month}-${day}`;
    case "MM&dd":
      return `${month}月${day}日`;
    case "yyyy-MM-dd":
      return `${year}-${month}-${day}`;
    case "yyyy-MM-dd hh:mm":
      return `${year}-${month}-${day} ${hour}:${minute}`;
    case "yyyy&MM&dd":
      return `${year}年${month}月${day}日`;
    case "MM&dd hh:mm":
      return `${month}月${day}日 ${hour}:${minute}`;
    case "hh&mm":
      return `${hour}时${minute}分`;
    case "hh:mm":
      return `${hour}:${minute}`;
    default:
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
}
