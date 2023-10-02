/** @format */

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const pomoList = createAsyncThunk(
  "pomo/list",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { auth } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Basic ${auth.token}`,
        },
      };

      const { data } = await axios.get(`/api/pomos`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const pomoCreate = createAsyncThunk(
  "pomo/create",
  async (
    { title, order, audio, minute, color_dark, color_light },
    { getState, rejectWithValue }
  ) => {
    const { auth } = getState();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth.token}`,
        },
      };

      await axios.post(
        "/api/pomo",
        { title, order, audio, minute, color_dark, color_light },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
