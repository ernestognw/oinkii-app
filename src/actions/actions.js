import firebase from "react-native-firebase";

export function handleModalInputChange(value, type, name) {
  return {
    type: "CHANGE_MODAL_INPUT",
    payload: {
      value: value,
      type: type,
      name: name
    }
  };
}

export function addIncomeAsync(record, userID) {
  let id = Date.now();
 
  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/balance/" + id)
    .update(
      record
    )
    .then(data => {
      // dispatch(addIncome(record, id));
    })
    .catch(error => {
      //error callback
      console.log("error ", error);
    });
  }
}


// Functions called by other ASYNC functions

function addIncome(record, id) {
  return {
    type: "ADD_INCOME",
    payload: {
      record,
      id
    }
  }
}