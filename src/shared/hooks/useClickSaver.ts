import { RefObject, useEffect } from "react";

interface IClickSaver {
  onSave: () => void;
  rootElement: RefObject<HTMLSelectElement | HTMLInputElement>;
}

export const useClickSaver = ({ onSave, rootElement }: IClickSaver) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!rootElement.current) {
        return;
      }

      const clickPosition = {
        top: e.y,
        left: e.x,
      };
      const rootElementRect = rootElement.current.getBoundingClientRect();
      const rootElementPosition = {
        top: rootElementRect.y,
        left: rootElementRect.x,
        width: rootElementRect.width,
        height: rootElementRect.height,
      };

      if (
        clickPosition.left < rootElementPosition.left ||
        clickPosition.left >
          rootElementPosition.left + rootElementPosition.width ||
        clickPosition.top < rootElementPosition.top ||
        clickPosition.top > rootElementPosition.top + rootElementPosition.height
      ) {
        onSave();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  });
};
