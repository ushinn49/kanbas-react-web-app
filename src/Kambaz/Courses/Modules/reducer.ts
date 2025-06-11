import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type Module } from "../../Database";
import { v4 as uuidv4 } from "uuid";

interface ModulesState {
  modules: Module[];
  module: Module;
}

const initialState: ModulesState = {
  modules: [],
  module: { _id: "0", name: "New Module", description: "New Description" },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, { payload: module }) => { 
      const newModule: Module = {
        _id: uuidv4(),
        ...module,
      };
      state.modules = [newModule, ...state.modules];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (m) => m._id !== action.payload
      );
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id ? action.payload : m
      );
    },
    setModule: (state, action: PayloadAction<Module>) => {
      state.module = action.payload;
    },
    editModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  setModule,
  editModule,
} = modulesSlice.actions;

export default modulesSlice.reducer;