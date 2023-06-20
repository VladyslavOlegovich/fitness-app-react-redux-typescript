import {
  ADD_WORKOUT,
  AddWorkoutAction,
  DELETE_WORKOUT,
  DeleteWorkoutAction,
  UPDATE_WORKOUTS,
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
  | UpdateWorkoutsAction;

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
    default:
      return state;
  }
};
