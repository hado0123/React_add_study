import { useEffect, useState } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickname, setNickname] = useState('')

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickname(e.target.value)

   // 1. 컴포넌트가 렌더링 될때마다 실행
   // 최초실행은 컴포넌트가 마운트 된 후에 1번 실행
   // 두번째 이후의 실행은 재렌더링이 된 후 에 실행
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickname })
   //    })

   //2. 컴포넌트가 맨 처음 렌더링 될때(마운트)만 실행
   // 컴포넌트가 마운트 된 후에 1번 실행
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickname })
   //    }, [])

   // 3. 특정 값이 변경될때만 호출
   // 최초실행은 컴포넌트가 마운트 된 후에 1번 실행
   // 두번째 이후의 실행은 재렌더링이 된 후 에 실행(단, 특정 값이 바뀔때만 재렌더링)
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickname })
   //    }, [name])

   // 4. 뒷정리 함수
   useEffect(() => {
      console.log('렌더링이 완료되었습니다')
      console.log({ name, nickname })

      // 다음 useEffect가 실행되기 직전에 실행
      return () => {
         console.log('useEffect가 실행되기전..')
      }
   }, [name])

   return (
      <div>
         <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름:</b>
               {name}
            </div>
            <div>
               <b>닉네임:</b>
               {nickname}
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
