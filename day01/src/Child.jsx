import { useState } from 'react'

function Child({ name, time, add }) {
   // [state명, state값을 바꿀 함수] = useState(state초기값)
   // text = '안녕'
   const [text, setText] = useState('hello')

   const result = add(1, 2)
   return (
      <div>
         <p>{text}</p>
         {/* ★ state가 바뀌면 컴포넌트 재렌더링이 일어난다 */}
         <button onClick={() => setText('안녕')}>변경</button>

         <p>{name}</p>
         <p>{time}</p>
         <p>{result}</p>
         <button onClick={() => add(1, 2)}>더하기</button>
      </div>
   )
}

export default Child
