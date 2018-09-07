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


// Functions called by other ASYNC functions

function cleanForm(isIncome) {
  return {
    type: "CLEAN_FORM",
    payload: {
      isIncome
    }
  }
}