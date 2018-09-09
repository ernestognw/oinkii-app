import firebase from "react-native-firebase";

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

export function bookLoaded() {
  return {
    type: "BOOK_LOADED"
  } 
}

export function addRecordAsync(record, userID) {
  let id = Date.now();
  record.quantity = Number(record.quantity)
  record.id = id;
  record.time = new Date(record.date + " " + record.hour).getTime();

  return (dispatch) => {firebase.database().ref("nativeApp/"+ userID + "/balance/" + id)
    .update(record)
    .then(data => {
      dispatch(cleanForm(record.income));
    })
    .catch(error => {
      alert('Ha ocurrido un error en el registro');
      console.log("error ", error);
    });
  }
}

export function deleteRecord(recordID, userID) {
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

export function openEditModal(recordID){
  return {
    type: 'OPEN_EDIT_MODAL',
    payload: {
      recordID
    }
  }
}

// Functions called by other ASYNC functions

function cleanForm(isIncome) {
  return {
    type: "CLEAN_FORM",
    payload: {
      isIncome
    }
  }
}