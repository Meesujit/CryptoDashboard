import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders ={
     'x-rapidapi-key': '81e7d7bbc3msh6e2e9e9d61046bfp1741dcjsn2f2eb858e191',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'


const createRequest = (url) => ({
    url, 
    headers: cryptoNewsHeaders,
})


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ data, count }) => createRequest(`/v1/cryptodaily?category=${data}&count=${count}`),
        }),
    }),
});



  

export const {useGetCryptoNewsQuery} = 
cryptoNewsApi;