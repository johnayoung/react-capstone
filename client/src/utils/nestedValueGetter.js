// Help located at: https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a

// p is the path definition, o is the object we want to retrieve values from
const get = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

export default get;