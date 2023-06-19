import { WorkoutData } from "../reducers/workoutJournalReducer";

export const ADD_WORKOUT = "ADD_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
// export interface AddWorkoutAction {
//   type: typeof ADD_WORKOUT;
//   payload: {
//     date: string;
//     title: string;
//     description: string;
//   };
// }
export interface AddWorkoutAction {
  type: typeof ADD_WORKOUT;
  payload: WorkoutData;
} // this
export interface DeleteWorkoutAction {
  type: typeof DELETE_WORKOUT;
  payload: string;
}

export const addWorkout = (workoutData: WorkoutData): AddWorkoutAction => ({
  type: ADD_WORKOUT,
  payload: workoutData,
});

export const deleteWorkout = (workoutId: string): DeleteWorkoutAction => ({
  type: DELETE_WORKOUT,
  payload: workoutId,
});
