import {
  ADD_WORKOUT,
  AddWorkoutAction,
  DELETE_WORKOUT,
  DeleteWorkoutAction,
} from "../actions/workoutJournalActions";

export interface WorkoutData {
  id: string;
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

// export interface WorkoutJournalState {
//   workouts: WorkoutData[];
//   id: string;
//   date: string;
//   title: string;
//   description: string;
//   completed: boolean;
// }
export interface WorkoutJournalState {
  workouts: WorkoutData[];
} // this

type WorkoutAction = AddWorkoutAction | DeleteWorkoutAction;

// const initialState: WorkoutJournalState = {
//   workouts: [],
//   id: "",
//   date: "",
//   title: "",
//   description: "",
//   completed: false,
// };
const initialState: WorkoutJournalState = {
  workouts: [],
}; // this
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
    default:
      return state;
  }
};
