import { createSlice, createSelector } from "@reduxjs/toolkit";
import { loginData } from "../../assets/data/data";

const initialState = {}

const accountSlice = createSlice({
    name: "account",
    initialState: {
        accountList: [],
    },
    accountList: [],
    reducers: {
        addAccount: (state, action) => {
            const newAccount = action.payload;
            const oldAccount = state.accountList.find(
                (account) => account.id === newAccount.id
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
                )
            }
        }
    }
})

loginData.push(
    {
        name: accountSlice.name,
        email: accountSlice.email,
        password: accountSlice.password,
    }
)

export const AccountAction = accountSlice.actions;
export const {} = accountSlice.actions;

export default accountSlice