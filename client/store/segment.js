// import axios from 'axios';

// // ACTION TYPE:
// const SET_ROBOTS = 'SET_ROBOTS'
// const ADD_ROBOT = 'ADD_ROBOT'
// const DELETE_ROBOT = 'DELETE_ROBOT';
// const UPDATE_ROBOT = 'UPDATE_ROBOT';


// // ACTION CREATOR:
// export const setRobots = (robots) => {
//   return {
//     type: SET_ROBOTS,
//     robots
//   }
// }

// const addRobot = (robot) => {
//   return {
//     type: ADD_ROBOT,
//     robot
//   }
// }

// const deleteRobot = (robot) => {
//   return {
//     type: DELETE_ROBOT,
//     robot
//   }
// }

// const updateRobot = (robot) => {
//   return {
//     type: UPDATE_ROBOT,
//     robot
//   }
// }


// // THUNK CREATOR:
// export const fetchRobots = () => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get('/api/robots')
//       dispatch(setRobots(data))
//     } catch(error) {
//       console.log(error)
//     }
//   }
// }

// export const addNewRobot = (robot, history) => {
//   return async (dispatch) => {
//     try {
//       const { data: robotObj } = await axios.post('/api/robots', robot) 
//       dispatch(addRobot(robotObj));
//       history.push('/robots');
//     } catch(error) {
//       console.log(error);
//     }
//   }
// }

// export const deleteSelectedRobot = (robotId) => {
//   return async (dispatch) => {
//     const {data: robotObj } = await axios.delete(`/api/robots/${robotId}`);
//     dispatch(deleteRobot(robotObj))
//   }
// }

// export const updateSelectedRobot = (robot, history) => {
//   return async (dispatch) => {
//     try {
//       const { data: updatedRobot } = await axios.put(`/api/robots/${robot.id}`, robot) 
//       dispatch(updateRobot(updatedRobot));
//       history.push(`/robots/${robot.id}`);
//     } catch(error) {
//       console.log(error);
//     }
//   }
// }


// //INITIAL STATE:
// const initialState = []


// //SUB-REDUCER:
// // Take a look at app/redux/index.js to see where this reducer is
// // added to the Redux store with combineReducers
// export default function robotsReducer(state = initialState, action) {
//   switch(action.type) {
//     case SET_ROBOTS:
//       return action.robots
//     case ADD_ROBOT:
//       return [...state, action.robot]
//     case DELETE_ROBOT:
//       return state.filter((robot) => robot.id !== action.robot.id)
//     case UPDATE_ROBOT:
//       return state.map((robot) => robot.id === action.robot.id ? action.robot : robot)
//     default:
//       return state
//   }
// }