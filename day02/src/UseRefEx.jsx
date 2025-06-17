import { useRef, useState } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   // const [nextId, setNextId] = useState(4)
   // setNextId(5)

   // useRef에 값을 저장하는 경우는 재렌더링을 발생시키지 않고 값을 변경하기 위해 사용(주로 간단한 값 저장)
   const nextId = useRef(4)
   nextId.current += 1

   const handleClick = () => {
      //    inputRef.current.focus() // 포커스 설정
      alert(inputRef.current.value)
   }

   return (
      <div>
         {/* dom을 직접적으로 다루고 싶은 요소에 inputRef 적용 */}
         <input type="text" ref={inputRef} />
         <button onClick={handleClick}>Focus</button>
      </div>
   )
}

export default UseRefEx
