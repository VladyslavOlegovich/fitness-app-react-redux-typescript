import { workoutJournalState } from "../reducers/workoutJournalReducer";

export const ADD_WORKOUT = "ADD_WORKOUT";

export interface AddWorkoutAction {
  type: typeof ADD_WORKOUT;
  payload: {
    date: string;
    title: string;
    description: string;
  };
}

export const addWorkout = (
  workoutData: workoutJournalState
): AddWorkoutAction => ({
  type: ADD_WORKOUT,
  payload: workoutData,
});
