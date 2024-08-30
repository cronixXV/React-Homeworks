import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import bcrypt from "bcryptjs"

// Async thunk для входа
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Используем базовый URL
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users?email=${email}`
      )

      if (!response.ok) {
        throw new Error("Ошибка при получении данных пользователя")
      }

      const users = await response.json()

      if (users.length === 0) {
        return rejectWithValue("Неверный email и/или пароль")
      }

      const user = users[0]
      const isValidPassword = bcrypt.compareSync(password, user.password)

      if (!isValidPassword) {
        return rejectWithValue("Неверный email и/или пароль")
      }

      const token = user.token || "mockTokenForExample" // Пример использования статического токена

      return {
        isAuthenticated: true,
        user: { email: user.email, name: user.name },
        token,
      }
    } catch (error) {
      return rejectWithValue(error.message || "Ошибка при выполнении запроса")
    }
  }
)

// Async thunk для регистрации
export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      // Проверяем, существует ли пользователь с данным email
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users?email=${email}`
      )

      if (!response.ok) {
        throw new Error("Ошибка при проверке пользователя")
      }

      const existingUsers = await response.json()

      if (existingUsers.length > 0) {
        return rejectWithValue("Пользователь с таким email уже существует")
      }

      // Хешируем пароль перед сохранением
      const hashedPassword = bcrypt.hashSync(password, 10)

      const newUser = {
        email,
        password: hashedPassword,
        name,
      }

      // Сохраняем нового пользователя в базу данных
      const saveResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      )

      if (!saveResponse.ok) {
        throw new Error("Ошибка при сохранении пользователя")
      }

      const savedUser = await saveResponse.json()

      // Возвращаем email и имя нового пользователя, а также мокаем token
      const token = "mockTokenForExample" // Пример использования статического токена

      return {
        email: savedUser.email,
        name: savedUser.name,
        token,
      }
    } catch (error) {
      return rejectWithValue(error.message || "Ошибка при выполнении запроса")
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      state.status = "idle"
      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.isAuthenticated = action.payload.isAuthenticated
        state.user = action.payload.user
        state.token = action.payload.token
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("user", JSON.stringify(action.payload.user))
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(register.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.isAuthenticated = true
        state.user = { email: action.payload.email, name: action.payload.name }
        state.token = action.payload.token
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("user", JSON.stringify(state.user))
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

// Экспортируем действие logout, чтобы его можно было использовать в компонентах
export const { logout } = authSlice.actions

export default authSlice.reducer
