import { createSlice, createSelector } from "@reduxjs/toolkit";
import { loginData } from "../../assets/data/data";

const initialState = {}

const accountSlice = createSlice({
    name: "account",
    initialState: {
        accountList: [],
        isLog : false,
    },
    accountList: [],
    reducers: {
        addAccount: (state, action) => {
            const newAccount = action.payload;
            const oldAccount = state.accountList.find(
                (account) => account.email === newAccount.email
            );
            if (oldAccount) 
            {
                alert("Account already exists");
            }
            else
            {
                state.accountList.push(
                    {
                        name: newAccount.name,
                        email: newAccount.email,
                        password: newAccount.password,
                    }
                );
                loginData.push(
                    {
                        name: newAccount.name,
                        email: newAccount.email,
                        password: newAccount.password,
                    }
                );
            }
        },
        loggedin: (state, action) => {
            state.isLog = action.payload;   
        }
    }
})


export const AccountAction = accountSlice.actions;
export const {} = accountSlice.actions;

export default accountSlice