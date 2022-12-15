## Redux-Toolkit

The Redux Toolkit package is intended to be the standard way to write Redux logic, reduce time to config Redux with a ton of packages

Redux Toolkit includes these APIs:

- `configureStore`
- `createReducer`
- `createAction`
- `createSlice`: allow to generate actions and reducers from one place
- `createAsyncThunk`
- `createEntityAdapter`
- `createSelector`

## Redux-Toolkit Query

It is purpose-built to `solve the use case of data fetching and caching`, supplying a compact, but `powerful toolset to define an API interface layer` for your app

RTK Query is `built on top of the Redux Toolkit`, `using Redux internally` for its architecture and `leverages createSlice and createAsyncThunk` to implement its capabilities.

RTK Query ensures that `any component that subscribes to the same query will always receive synchronized data`

RTK Query includes these APIs:

- `createApi`: describe how to interact with APIs and transform response data
- `fetchBaseQuery`:
- `<ApiProvider />`: can be used as a Provider if you do not already have a Redux store.
- `setupListeners`: enable refetchOnMount and refetchOnReconnect behaviors
