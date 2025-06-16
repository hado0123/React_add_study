import { useState } from 'react'

function EventPractice() {
   // 여러개의 데이터를 한꺼번에 다루기 위해 state에 JSON 객체 사용
   /*
        form = {
          username: '',
          message: '',
        }
    */
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onClick = () => {
      alert(`username: ${username}, message: ${message}`)

      // form state값의 초기화
      setForm({
         username: '',
         message: '',
      })
   }

   // state값을 내가 input창에 입력한 값으로 바꿔준다
   const onChange = () => {
      // 불변성을 유지
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }

      setForm(nextForm)
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} />

         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default EventPractice
