// State argument is not application state, only the state
// this reducer is responsible for
export default function(state, action) {
  return [
    { title: 'JavaScript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ]
}
