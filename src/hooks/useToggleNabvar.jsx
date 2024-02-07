import { useRef, useState } from "react";

export const useToggleNabvar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const refContainerNabvar = useRef(null);

  const refBtnToggle = useRef(null);

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return { refContainerNabvar, refBtnToggle, toggleMenu, isToggle };
};
