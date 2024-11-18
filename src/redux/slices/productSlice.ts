import { PRODUCT_ENDPOINT } from "@/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id?: number;
  name: string;
  urlImage: string;
  detail: string;
  price: number;
  quantity: number;
  promotion: boolean;
  categoryId: number;
  Category?: {
    id: string
    name: string
    detail: string
  }
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// สร้าง async thunk สำหรับเพิ่มสินค้าผ่าน API
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product: Product, thunkAPI) => {
    try {
      const response = await axios.post(PRODUCT_ENDPOINT, product);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        // ตรวจสอบว่า error เป็นประเภท Error หรือไม่
        return thunkAPI.rejectWithValue(error.message); // ส่ง message ของ error กลับไป
      } else {
        // กรณีที่ไม่สามารถระบุประเภทได้
        return thunkAPI.rejectWithValue("Failed to create product");
      }
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${PRODUCT_ENDPOINT}?categoryId=`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch products");
      }
    }
  }
);

export const upDateProduct = createAsyncThunk(
  "category/upDateProduct",
  async (product: Product, thunkAPI) => {
    try {
      const update = await axios.put(
        `${PRODUCT_ENDPOINT}/${product.id}`,
        product
      );
      if (update) {
        const response = await axios.get(`${PRODUCT_ENDPOINT}?categoryId=`);
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

export const deleteProduct = createAsyncThunk(
  "category/deleteCategory",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`${PRODUCT_ENDPOINT}/${id}`);
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

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload.data); // เพิ่มสินค้าใหม่ลงใน state
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // เก็บข้อความข้อผิดพลาด
      });
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data; // ตั้งค่าข้อมูลสินค้าใน state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // เก็บข้อความข้อผิดพลาด
      });
      builder
        .addCase(upDateProduct.pending, (state) => {
          state.loading = true;
        })
        .addCase(upDateProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload.data;
        })
        .addCase(upDateProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
      builder
        .addCase(deleteProduct.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.products = state.products.filter(
            (product) => product.id !== action.payload.data.id
          );
        })
        .addCase(deleteProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
  },
});

export default productSlice.reducer;
