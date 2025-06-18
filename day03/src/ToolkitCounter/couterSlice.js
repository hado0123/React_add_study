import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice', // slice 이름
   initialState: { value: 0 }, // 초기 state
   reducers: {
      // reducer: state를 바꿔줌
      up: (state, action) => {
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer // 리듀서 함수 내보냄

// 액션 생성자 함수를 내보냄
export const { up, down } = counterSlice.actions
