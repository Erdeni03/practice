import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todoReducer from './slice/todoSlice'

const rootReduce = combineReducers({
	todo: todoReducer
})

export const store = configureStore({
	reducer: rootReduce
})

// export type RootState = ReturnType<typeof rootReduce>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
