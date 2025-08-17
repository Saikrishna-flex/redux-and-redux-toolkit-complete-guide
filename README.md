# Redux and Redux Toolkit – Complete Guide 🚀

This repository contains my learning journey and practice examples while studying **Redux** and **Redux Toolkit** with both **JavaScript** and **React**.

The practice is based on the amazing tutorial by [KhanamCoding](https://www.youtube.com/watch?v=SlC8941Wwrk) 🎥.  
Huge thanks to [Khaiser Khanam](https://www.linkedin.com/in/khaiserkhanam/) 🙌 for the clear explanation and guidance.

---

## 📂 Folder Structure
- **Javascript-Redux** → Redux with vanilla JavaScript
- **Javascript-Redux-Toolkit** → Redux Toolkit with vanilla JavaScript
- **React-Redux** → Redux with React
- **React-Redux-Toolkit** → Redux Toolkit with React

---

## 💡 Key Learnings
- Core concepts of Redux (store, reducer, action, dispatch, subscription)
- Using Redux with React components
- Benefits of Redux Toolkit (createSlice, createAsyncThunk, configureStore)
- Cleaner and easier state management with Toolkit
- Real-world patterns for handling async operations

---

## 🛠️ How to Run
For any folder:
```bash
cd folder-name
npm install
npm start
```
# 📘 Redux & Redux Toolkit Concepts

## 🔹 Why Do We Need Redux?
In React, sibling components cannot share data directly.  
Redux solves this by providing a **centralized store** that allows data to be shared consistently across the entire application.

---

## 🔹 Core Concepts of Redux

### 1. Store
A centralized container that holds the entire application state.

### 2. Action
A plain object that describes **what happened** and how the state should change.

### 3. Reducer
A pure function that takes the **current state** and an **action**, then returns a **new state** without mutating the old one.

---

## 🔹 Three Essential Principles of Redux
1. **Single Source of Truth**  
   - The entire application state is kept in a **single store**.  
   - This makes state predictable and easier to debug.  

2. **State is Read-Only**  
   - State can only be changed by **dispatching actions**.  
   - Actions are plain objects describing what happened.  
   - This ensures state updates are **traceable and predictable**.  

3. **Changes are Made with Pure Functions**  
   - Reducers are pure functions that determine how state changes.  
   - They take `(state, action)` as arguments and return a **new state**.  
   - They never mutate the original state.  

---

## 🔹 Key Terms
- **Store** → Holds the entire state of the application.  
- **Action** → A plain object describing a change.  
- **Action Type** → A string constant representing the type of action.  
- **Action Creator** → A function that returns an action object.  
- **Reducer** → A pure function that updates state based on actions.  

---

## 🔹 Responsibilities of the Store
1. Holds the entire application state.  
2. Provides `getState()` → Access the current state.  
3. Provides `subscribe(listener)` → Register listeners that run when state changes.  
4. Provides `dispatch(action)` → Update state via actions.  
5. Supports unsubscribing listeners.  

---

## 🔹 Middleware
- Middleware sits **between dispatching an action and the reducer**.  
- It allows us to:
  - Run code after dispatch but before the action reaches the reducer.  
  - Handle **asynchronous operations** (API calls, timers, logging, etc.).  

### Example: Redux Thunk
- `redux-thunk` allows writing action creators that return a **function** instead of an object.  
- This enables **async logic** like API calls before dispatching an action.  

---

## 🔹 Redux Toolkit (RTK)
Redux Toolkit is the **modern way to write Redux code**, recommended by the official Redux team.  
It simplifies setup and reduces boilerplate.

✅ Key Benefits:
- Cleaner and more efficient Redux code  
- Built-in tools for async operations  
- Uses **Immer** under the hood for immutability  
- Includes sensible defaults like `redux-thunk` middleware  

---

## 🔹 Asynchronous Operations with `createAsyncThunk`
Redux Toolkit provides `createAsyncThunk` to simplify async logic (like API calls).

### Steps:
1. **Define the Async Thunk**  
   ```js
   createAsyncThunk("actionName", async (args) => { ... })
   ```
2. **Handle Thunk in Slice (extraReducers)**
It automatically dispatches lifecycle actions:

 - `pending` → request started
 - `fulfilled` → request succeeded
 - `rejected` → request failed

3. **Dispatch the Thunk**
 - Use it like a normal action inside components.

## 🔹 Interview Questions (Redux & Redux Toolkit)
 - What is Redux Toolkit, and how does it differ from plain Redux?
 - Why is Redux Toolkit the recommended way to write Redux logic?
 - What does createSlice do, and how does it simplify Redux setup?
 - How does createAsyncThunk work, and when should you use it?
 - Explain the purpose of configureStore vs createStore.
 - How does Redux Toolkit handle immutability in reducers?
 - What is Immer, and how does RTK use it?
 - How does RTK reduce boilerplate compared to traditional Redux?
 - What is the builder syntax in extraReducers, and why is it useful?
 - How can you customize middleware in RTK’s configureStore?
 - How does RTK handle errors in async actions?
 - What is the structure of a typical slice created with createSlice?
 - How do you handle loading states in RTK?
 - How do you test async thunks?
 - What default middleware is included in RTK?
 - What is getDefaultMiddleware and how can you customize it?



