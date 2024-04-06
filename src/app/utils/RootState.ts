import { AuthState } from "../(auth)/slice/types";

export interface RootState {
  auth?: AuthState;
}
