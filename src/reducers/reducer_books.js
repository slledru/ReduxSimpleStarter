// State argument is not application state, only the state
// this reducer is responsible for
export default function(state, action) {
  return [
    { title: 'JavaScript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ]
}
