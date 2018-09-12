import firebase from "react-native-firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";

export function handleIncomeModalInputChange(value, name) {
  return {
    type: "CHANGE_INCOME_MODAL_INPUT",
    payload: {
      value,
      name,
    }
  };
}

export function handleExpenseModalInputChange(value, name) {
  return {
    type: "CHANGE_EXPENSE_MODAL_INPUT",
    payload: {
      value,
      name,
    }
  };
}

export function handleEditModalInputChange(value, name) {
  return {
    type: "CHANGE_EDIT_MODAL_INPUT",
    payload: {
      value,
      name,
    }
  };
}

export function handleGoalsModalInputChange(value, name) {
  return {
    type: "CHANGE_GOALS_MODAL_INPUT",
    payload: {
      value,
      name,
    }
  };
}

export function handleEditGoalsModalInputChange(value, name) {
  return {
    type: "CHANGE_EDIT_GOALS_MODAL_INPUT",
    payload: {
      value,
      name,
    }
  };
}

export function setBalanceData(balanceData) {
  let keyIndex = Object.keys(balanceData);
  let sortedBalanceIndex = [];

  let totalIncome = 0;
  let totalExpense = 0;
  let totalBalance = 0;

  for (let id in balanceData){
    sortedBalanceIndex.push([id, balanceData[id].time, balanceData[id].income, balanceData[id].quantity])
    if(balanceData[id].income) {
      totalIncome += balanceData[id].quantity;
    } else {
      totalExpense += balanceData[id].quantity;
    }
  }

  totalBalance = totalIncome - totalExpense

  sortedBalanceIndex.sort((a,b) => {
    return b[1] - a[1]
  })

  console.log(sortedBalanceIndex);

  return {
    type: "SET_BALANCE_DATA",
    payload: {
      balanceData,
      sortedBalanceIndex,
      totalIncome,
      totalExpense,
      totalBalance,
    }
  }
}

export function setGoalsData(goalsData) {
  let keyIndex = Object.keys(goalsData);
  let sortedGoalsIndex = [];

  for (let id in goalsData){
    id = id.toString();
    sortedGoalsIndex.push([id, goalsData[id].timeToAccomplish, goalsData[id].quantity])
  }

  sortedGoalsIndex.sort((a,b) => {
    return a[1] - b[1]
  })

  return {
    type: "SET_GOALS_DATA",
    payload: {
      goalsData,
      sortedGoalsIndex,
    }
  }
}

export function bookLoaded() {
  return {
    type: "BOOK_LOADED"
  } 
}

export function addRecordAsync(record, userID) {
  let id = Date.now();
  record.id = id;

  record.quantity = Number(record.quantity)
  record.time = new Date(record.date + " " + record.hour).getTime();

  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/balance/" + id)
    .update(record)
    .then(data => {
      dispatch(cleanRecordForm(record.income));
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}

export function addGoalAsync(goal, userID) {
  let id = Date.now();
  goal.id = id;

  goal.quantity = Number(goal.quantity)
  goal.timeToAccomplish = new Date(goal.dateToAccomplish).getTime();

  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/goals/" + id)
    .update(goal)
    .then(data => {
      dispatch(cleanGoalForm());
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}

export function deleteRecord(recordID, userID) {
  console.log(userID)
  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/balance/" + recordID)
    .remove()
    .then(data => {
      null
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}

export function deleteGoal(goalID, userID) {
  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/goals/" + goalID)
    .remove()
    .then(data => {
      null
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}

export function completeGoal(goalForm, userID) {  
  // Save Goal into Completed Goals
  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/completedGoals/" + goalForm.id)
    .update(goalForm)
    .then(data => {
      null;
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}


export function addGoalToRecords(goalForm, userID) {
  delete goalForm.dateToAccomplish;
  delete goalForm.timeToAccomplish;

  // Month Index
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  goalForm.income = false;
  goalForm.time = Date.now();

  let fullDate = new Date(goalForm.time)
  
  // Formatting Date
  let month = fullDate.getMonth();
  let day = fullDate.getDate();
  let year = fullDate.getFullYear();

  goalForm.date = `${months[month]} ${day}, ${year}`

  // Formatting Hour
  let hour = fullDate.getHours()
  let minutes = fullDate.getMinutes()
  let prefix;
  console.log(hour)

  if (hour > 12) {
    hour -= 12;
    if(hour == 24){
      prefix = "am";
    } else {
      prefix = "pm";
    }
  } else {
    if (hour == 12) {
      prefix = "pm";
    } else {
      prefix = "am";
    }
  }

  hour = ('0' + hour).slice(-2);

  goalForm.hour = `${hour}:${minutes} ${prefix}`

  return dispatch => {firebase.database().ref("nativeApp/"+ userID + "/balance/" + goalForm.id)
    .update(goalForm)
    .then(data => {
      null;
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}

export function editRecord(editForm, userID) {
  editForm.quantity = Number(editForm.quantity)
  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/balance/" + editForm.id)
    .update(editForm)
    .then(data => {
      null
    })
    .catch(error => {
      alert('Ha ocurrido un error al editar');
      console.log("error ", error);
    });
  }
}

export function editGoal(editGoalsForm, userID) {
  editGoalsForm.quantity = Number(editGoalsForm.quantity)
  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/goals/" + editGoalsForm.id)
    .update(editGoalsForm)
    .then(data => {
      null
    })
    .catch(error => {
      alert('Ha ocurrido un error al editar');
      console.log("error ", error);
    });
  }
}

export function openEditRecordModal(recordID){
  return {
    type: 'OPEN_EDIT_RECORD_MODAL',
    payload: {
      recordID
    }
  }
}

export function openEditGoalsModal(goalID){
  return {
    type: 'OPEN_EDIT_GOALS_MODAL',
    payload: {
      goalID
    }
  }
}

export function handleLoginAsync() {
  return async (dispatch) => {
    try {
      const result = await LoginManager.logInWithReadPermissions([
        "public_profile",
        "email"
      ]);

      if (result.isCancelled) {
        throw new Error("User cancelled request"); // Handle this however fits the flow of your app
      }

      console.log(
        `Login success with permissions: ${result.grantedPermissions.toString()}`
      );

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error(
          "Something went wrong obtaining the users access token"
        ); // Handle this however fits the flow of your app
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      // login with credential
      const currentUser = await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);

      dispatch(handleLogin(currentUser.user));
    } catch (e) {
      console.error(e);
    }
  }
}

// Functions called by other ASYNC functions

function cleanRecordForm(isIncome) {
  return {
    type: "CLEAN_RECORD_FORM",
    payload: {
      isIncome
    }
  }
}

function cleanGoalForm() {
  return {
    type: "CLEAN_GOAL_FORM"
  }
}

function handleLogin(userData) {
  return {
    type: "SET_USER_DATA",
    payload: {
      userData,
    }
  }
}