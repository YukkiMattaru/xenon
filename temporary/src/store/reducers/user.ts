import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { XenonAPI } from '../../types/XenonAPI';

interface UserState {
  users: XenonAPI.User[];
  isLoading: boolean;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
};

type AddUserActionPayload = Omit<XenonAPI.User, 'id'>;
type UserInfoToEdit = Omit<XenonAPI.User, 'id' | 'login' | 'mail'>;
type EditUserActionPayload = Partial<UserInfoToEdit> & Pick<XenonAPI.User, 'id'>;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    setUsers(state, action: PayloadAction<XenonAPI.User[]>) {
      state.users = action.payload;
      state.isLoading = false;
    },
    registerUser(state, action: PayloadAction<AddUserActionPayload>) {
      const newUser: XenonAPI.User = {
        id: uuidv4(),
        ...action.payload,
      };
      state.users.push(newUser);
    },
    editProfile(state, action: PayloadAction<EditUserActionPayload>) {
      state.users.forEach((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name ?? user.name;
          user.lastName = action.payload.lastName ?? user.lastName;
          user.password = action.payload.password ?? user.password;
          user.phoneNumber = action.payload.phoneNumber ?? user.phoneNumber;
        }
      });
    },
  },
});
