
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const {value} = useAppSelector( state => state.counter)
  const dispatch = useAppDispatch();
  const handleIncrement = () =>{
    dispatch(increment())
  }
  const handleDecrement = () =>{
    dispatch(decrement())
  }

  return (
 <div>
    <h1>Tech Net Counter</h1>
    <div className="w-9/12 mx-auto">
      <button onClick={handleIncrement} className="btn border  border-red-500 px-2 py-1 rounded">increment</button>
      <span className="mx-5">{value}</span>
      <button onClick={handleDecrement} className="btn border  border-red-500 px-2 py-1 rounded">Decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(5))} className="btn border  border-red-500 px-2 py-1 rounded">incrementByAmount</button>
    </div>
 </div>
  )
}

export default App
