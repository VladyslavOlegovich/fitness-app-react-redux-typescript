import {
  ADD_WORKOUT,
  AddWorkoutAction,
} from "../actions/workoutJournalActions";

export interface workoutJournalState {
  workouts: WorkoutData[];
  date: string;
  title: string;
  description: string;
}
export interface WorkoutData {
  date: string;
  title: string;
  description: string;
}
type WorkoutAction = AddWorkoutAction;

const initialState: workoutJournalState = {
  workouts: [],
  date: "",
  title: "",
  description: "",
};

export const workoutJournalReducer = (
  state = initialState,
  action: WorkoutAction
) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return { ...state, workouts: [...state.workouts, action.payload] };
    default:
      return state;
  }
};
