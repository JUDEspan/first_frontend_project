import {useDispatch, useSelector} from "react-redux"
import {decrement, increment} from "../components/Redux/CounterSlice"




const counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>counter: {count}</h1>
        <button
        onClick={() => dispatch(decrement())}>
            decrease
        </button>
        <button
        onClick={() => dispatch(increment())}>
            increase
        </button>
    </div>
  )
}

export default counter