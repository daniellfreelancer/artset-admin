import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiURL = "https://asweb.store";
// const apiHost = "http://localhost:4000";

export const loginAPI = createApi({
    reducerPath: "loginAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    tagTypes: ['Post'],

    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (user) =>({
                url:'/admin/login',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })
    })
})

export default loginAPI;
export const {useSigninMutation} = loginAPI;