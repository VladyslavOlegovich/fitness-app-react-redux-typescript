import {
  ADD_WORKOUT,
  AddWorkoutAction,
  DELETE_WORKOUT,
  DeleteWorkoutAction,
  UPDATE_WORKOUTS,
  UPDATE_WORKOUT_COMPLETED,
  UpdateWorkoutCompletedAction,
  UpdateWorkoutsAction,
} from "../actions/workoutJournalActions";

export interface WorkoutData {
  id: string;
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface WorkoutJournalState {
  workouts: WorkoutData[];
}

type WorkoutAction =
  | AddWorkoutAction
  | DeleteWorkoutAction
  | UpdateWorkoutsAction
  | UpdateWorkoutCompletedAction;

const initialState: WorkoutJournalState = {
  workouts: [],
};

export const workoutJournalReducer = (
  state = initialState,
  action: WorkoutAction
) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return { ...state, workouts: [...state.workouts, action.payload] };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload
        ),
      };
    case UPDATE_WORKOUTS: {
      return {
        ...state,
        workouts: action.payload,
      };
    }
    case UPDATE_WORKOUT_COMPLETED: {
      const { workoutId, completed } = action.payload;
      const updatedWorkouts = state.workouts.map((workout) => {
        if (workout.id === workoutId) {
          return {
            ...workout,
            completed,
          };
        }
        return workout;
      });
      return {
        ...state,
        workouts: updatedWorkouts,
      };
    }
    default:
      return state;
  }
};
