import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const EmailContext = createContext({});
const EmailProvider = ({ children }) => {
  const [emailValue, setEmailValue] = useState("");
  return (
    <EmailContext.Provider value={{ emailValue, setEmailValue }}>
      {children}
    </EmailContext.Provider>
  );
};

EmailProvider.propTypes = {
  children: PropTypes.node,
};
export default EmailProvider;
