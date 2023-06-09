import { createSlice } from "@reduxjs/toolkit";
import { registerDB, loginDB, logoutDB, updateUserProfile} from "./users-operations";

const handleUserPending = (state) => {
    state.isLoading = true;
  };
  const handleUserRejected = (state, { payload }) => {
    state.error = payload;
  };
  
const initialState = {
    token: null,
    isLoading: false,
    error: null,
    user: null,
};

const usersSlice = createSlice({
    name: "users",  
    initialState, 
    reducers: {
        setFilterAction: (state, { payload }) => {
            state.filter = payload;
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(registerDB.pending, handleUserPending)
          .addCase(loginDB.pending, handleUserPending)       
          .addCase(logoutDB.pending, handleUserPending) 
          .addCase(updateUserProfile.pending, handleUserPending)   
          .addCase(registerDB.rejected, handleUserRejected)   
          .addCase(loginDB.rejected, handleUserRejected)
          .addCase(logoutDB.rejected, handleUserRejected)
          .addCase(updateUserProfile.rejected, handleUserRejected)   
          .addCase(registerDB.fulfilled, (state, { payload }) => {
            //console.log('registerDB.fulfilled ',payload);  
            state.isLoading = false;
            state.user = payload;           
        })
          .addCase(logoutDB.fulfilled, (state, { payload }) => {         
            state.token = null;
            state.isLoading = false;
            state.error = null;
            state.user = null;      
          })
          .addCase(loginDB.fulfilled, (state,  { payload }) => {          
            state.isLoading = false;
            state.user = payload;         
          })
          .addCase(updateUserProfile.fulfilled, (state,  { payload }) => {
            console.log("updateUserProfile payload ",payload); 

            const {displayName, email } = payload;         
            state.isLoading = false;
            if (state.user){
              state.user = {...state.user, displayName};
            }else{
              state.user = {email, displayName};
            }

          });
      },  
});

export const usersReducer = usersSlice.reducer;
export const {setFilterAction} = usersSlice.actions;
