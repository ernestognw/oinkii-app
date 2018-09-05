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
