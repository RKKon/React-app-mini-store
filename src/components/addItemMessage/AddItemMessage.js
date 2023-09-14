import { useEffect } from "react";

const AddItemMessage = (props) => {
  const { displayName = "", closeAddItemMessage = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAddItemMessage, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [displayName]);

  return (
    <div id="toast-container">
      <div className="toast">{displayName} added to basket</div>
    </div>
  );
};

export default AddItemMessage;
