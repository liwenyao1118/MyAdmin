export function getTime() {
  const hour = new Date().getHours()
  let time = ''
  if (hour <= 9) {
    time = '早上'
  } else if (hour <= 13) {
    time = '中午'
  } else if (hour <= 18) {
    time = '下午'
  } else {
    time = '晚上'
  }
  return time
}
