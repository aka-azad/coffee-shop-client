import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ModalContext = createContext(null);
const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navigateLink, setNavigateLink] = useState("/");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        navigateLink,
        setNavigateLink,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
ModalProvider.propTypes = {
  children: PropTypes.node,
};
export default ModalProvider;
