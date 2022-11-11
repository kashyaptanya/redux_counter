import '../src/css/home.css';
import { useDispatch,useSelector} from 'react-redux'
import { decrement, increment } from './reducers/updown';



function Home() {

  const dispatch = useDispatch()
  const {value}= useSelector((state)=>state.counter )

  return (

    <div className='count'>
    <h1>{value}</h1>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())
    }>decrement</button> 


    </div>

  );
}

export default Home;









