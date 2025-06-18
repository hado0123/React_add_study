import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './couterSlice'

const store = configureStore({
   reducer: {
      counter: counterSlice, // 리듀서 함수를 store에 저장
   },
})

export default store
