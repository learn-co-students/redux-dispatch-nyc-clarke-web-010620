document.addEventListener('DOMContentLoaded', (e) => {})

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  document.body.textContent = state.count
}

function dispatch(action){
  state = changeState(state, action)
  render()
  console.log(state.count)
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

// Functions to Execute
 
dispatch(action)
dispatch(action)
