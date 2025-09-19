import { RootState } from "../../store";

export const userSelector = (state: RootState) => state.auth.user
export const userLoadingSelector = (state: RootState) => state.auth.loading
export const userErrorSelector = (state: RootState) => state.auth.error
