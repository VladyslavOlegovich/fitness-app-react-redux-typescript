// import { UPDATE_WORKOUT_COMPLETED } from './workoutJournalActions';
import { WorkoutData } from "../reducers/workoutJournalReducer";

export const ADD_WORKOUT = "ADD_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const UPDATE_WORKOUTS = "UPDATE_WORKOUTS ";
export const UPDATE_WORKOUT_COMPLETED = "UPDATE_WORKOUT_COMPLETED";

export interface AddWorkoutAction {
  type: typeof ADD_WORKOUT;
  payload: WorkoutData;
}
export interface DeleteWorkoutAction {
  type: typeof DELETE_WORKOUT;
  payload: string;
}

export interface UpdateWorkoutsAction {
  type: typeof UPDATE_WORKOUTS;
  payload: WorkoutData[];
}
export interface UpdateWorkoutCompletedAction {
  type: typeof UPDATE_WORKOUT_COMPLETED;
  payload: {
    workoutId: string;
    completed: boolean;
  };
}
export const addWorkout = (workoutData: WorkoutData): AddWorkoutAction => ({
  type: ADD_WORKOUT,
  payload: workoutData,
});

export const deleteWorkout = (workoutId: string): DeleteWorkoutAction => ({
  type: DELETE_WORKOUT,
  payload: workoutId,
});

export const updateWorkouts = (updatedWorkouts: WorkoutData[]) => ({
  type: UPDATE_WORKOUTS,
  payload: updatedWorkouts,
});

export const updateWorkoutCompleted = (
  workoutId: string,
  completed: boolean
) => ({
  type: UPDATE_WORKOUT_COMPLETED,
  payload: {
    workoutId,
    completed,
  },
});
