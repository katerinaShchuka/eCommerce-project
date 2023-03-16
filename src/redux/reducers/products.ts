import { Product } from "../../types/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState: Product[] = []

export const fetchAll = createAsyncThunk(
    "fetchAll",
    async() => {
        const result = await axios.get("https:fakestoreapi.com/products")
        const data = result.data
        return data
    }
)

export const createOne = createAsyncThunk(
    "createOne",
    async (product: Product) => {
        const result = await axios.post("https:fakestoreapi.com/products", product)
        const newProduct = result.data
        return newProduct
    }
)

export const updateOne = createAsyncThunk(
    "updateOne",
    async ({
        id, data
    }: {
        id: number,
        data: Product
    }
    ) => {
        const result = await axios.put(
            `https://fakestoreapi.com/products/${id}`, data)
        return result.data
    }
)

const productSlice = createSlice({
    name: "productReducer",
    initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build   
            .addCase(fetchAll.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(updateOne.fulfilled, (state, action) => {
                return state.map(
                    item => {
                        if(item.id === action.payload.id) {
                            item = action.payload
                        }
                        return item
                    }
                )
            })
        .addCase(createOne.fulfilled, (state, action) => {
            state.push(action.payload)
        })
    }
})

const productReducer = productSlice.reducer
export default productReducer
