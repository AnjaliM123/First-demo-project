import { useState } from "react";
const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [deactivate, setDeactivate] = useState(false);
    const [isModal, setIsModal] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
    function updateToggle() {
      setIsUpdate(!isUpdate);
    }
    function confirmToggle() {
      setConfirm(!confirm);
    }
    function deactivateToggle() {
      setDeactivate(!deactivate);
    }
    function modalToggle() {
      setIsModal(!isModal);
    }
    return {
      isShowing,
      isUpdate,
      deactivate,
      confirm,
      isModal,
      toggle,
      updateToggle,
      confirmToggle,
      deactivateToggle,
      modalToggle,
    };
  };
  
  export default useModal;