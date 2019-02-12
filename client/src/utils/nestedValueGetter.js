// Help located at: https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a

const props = {
    user: {
      posts: [
        { title: 'Foo', comments: [ 'Good one!', 'Interesting...' ] },
        { title: 'Bar', comments: [ 'Ok' ] },
        { title: 'Baz', comments: [] },
      ]
    },
    endpoints: [
        {name: 'first', parameters: [{name: 'param1'}]}
    ]
}

// p is the path definition, o is the object we want to retrieve values from
const get = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

console.log(get(['user', 'posts', 0, 'comments'], props))
console.log(get(['endpoints', 0, 'parameters', 0], props))

export default get;