import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './couterSlice'

function Counter() {
   const dispatch = useDispatch()
   // const count = useSelector((state) => {
   //    console.log(state)
   //    return state.counter.value
   // })

   const count = useSelector((state) => state.counter.value)

   return (
      <div>
         {count}
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            감소
         </button>
      </div>
   )
}

export default Counter
