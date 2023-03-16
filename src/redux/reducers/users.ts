import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserReducer } from "../../types/users";
import axios from "axios";

const initialState: UserReducer = {
    users: [],
    currentUser: undefined
}

export const fetchAllUsers = createAsyncThunk(
    "fetchAllUsers",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/users");
        return response.data
    }
)

const userSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {

    },
    extraReducers: (build) =>  {
        build.addCase(fetchAllUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
            state.users=action.payload
        })
    }
})

export default userSlice.reducer