export const changeIncrement = ({
  action,
  slots,
  counter,
  setCounter,
  setDisableButton,
  disableButton,
}) => {
  if (action === 0) {
    if (counter !== 1) setCounter((counter) => counter - 1);
    else
      setDisableButton((disableButton) => ({
        ...disableButton,
        decrement: true,
      }));
  } else {
    setDisableButton((disableButton) => ({
      ...disableButton,
      decrement: false,
    }));
    if (counter < slots) {
      setCounter((counter) => counter + 1);
    } else {
      setDisableButton((disableButton) => ({
        ...disableButton,
        increment: true,
      }));
    }
  }
};
