import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { workoutJournalReducer } from "./workoutJournalReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  workout: workoutJournalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
