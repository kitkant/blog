import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserData = createAsyncThunk('posts/fetchUserData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const jsonData = await response.json();
  return jsonData;
});
function getRandomIntInclusive(): number {
  const minCeiled = Math.ceil(0)
  const maxFloored = Math.floor(50)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: null, loading: false, error: null },
  reducers: {
    createPost(state : any, action) {
    },
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.map((post: any)=>{
            return {
              id: post.id,
              userId: post.userId,
              title: post.title,
              body: post.body,
              like: getRandomIntInclusive(),
              dislike: getRandomIntInclusive()
            }
        });
      })
      .addCase(fetchUserData.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})


const { actions, reducer } = postsSlice;

export const { createPost, updatePost, deletePost } = actions;

export default reducer;
