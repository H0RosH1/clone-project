import { CATEGORY_ENDPOINT } from "@/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  detail: string;
}

interface CategoryState {
  categorys: Category[];
  loading: boolean;
  error: string | null;
}

// สร้าง async thunk สำหรับเพิ่มสินค้าผ่าน API
export const createCategory = createAsyncThunk(
  "category/createProduct",
  async (category: {name: string, detail: string}, thunkAPI) => {
    try {
      const response = await axios.post(CATEGORY_ENDPOINT, category);

        return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        // ตรวจสอบว่า error เป็นประเภท Error หรือไม่
        return thunkAPI.rejectWithValue(error.message); // ส่ง message ของ error กลับไป
      } else {
        // กรณีที่ไม่สามารถระบุประเภทได้
        return thunkAPI.rejectWithValue("Failed to create category");
      }
    }
  }
);

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(CATEGORY_ENDPOINT);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch category");
      }
    }
  }
);

export const upDateCategory = createAsyncThunk(
  "category/upDateCategory",
  async (category: { id: string; name: string; detail: string }, thunkAPI) => {
    try {
      const update = await axios.put(`${CATEGORY_ENDPOINT}/${category.id}`, {
        name: category.name,
        detail: category.detail,
      });
      if (update) {
        const response = await axios.get(CATEGORY_ENDPOINT);
        return response.data;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch category");
      }
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`${CATEGORY_ENDPOINT}/${id}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch category");
      }
    }
  }
);

const initialState: CategoryState = {
  categorys: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        // state.categorys = action.payload.data;
        state.categorys.push(action.payload.data);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categorys = action.payload.data;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(upDateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(upDateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categorys = action.payload.data;
      })
      .addCase(upDateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categorys = state.categorys.filter(
          (category) => category.id !== action.payload.data.id
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
