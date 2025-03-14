import { useState } from "react";

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
      {showMessage && <p>This message is visible</p>}
    </div>
  );
};

export default ToggleMessage;