
export const randomize = num => Math.floor(Math.random() * Math.floor(num))

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }