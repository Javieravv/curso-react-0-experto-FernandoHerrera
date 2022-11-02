import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './store/slices/counter/counterSlice'

const  App = () => {
    const { counter } = useSelector ( state => state.counter)
    const dispatch = useDispatch ()
    const valueIncrement = 10

    return (
      <div className="App">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>count is { counter }</h1>
        <div className="card">
          <button onClick={() => dispatch ( increment() ) }>
            Increment
          </button>
          <button onClick={() => dispatch ( decrement() ) }>
            Decrement
          </button>
          <button onClick={() => dispatch ( incrementByAmount(valueIncrement) ) }>
            Increment by {valueIncrement}
          </button>
          <button onClick={() => dispatch ( decrementByAmount(valueIncrement) ) }>
            Decrement by {valueIncrement}
          </button>
        </div>
      </div>
    )
}

export default App 