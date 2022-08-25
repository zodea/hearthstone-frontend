export function lowerCase(string: string) {
  return string.toLocaleLowerCase()
}

export function trimUpperFirst(string: string) {
  return string
    .split(' ')
    .reduce((prev, curr) => prev + curr[0], '')
    .toLocaleUpperCase()
}
