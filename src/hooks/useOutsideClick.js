import { useEffect, useRef } from "react";

function useOutsideClick(action, listeningCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          action();
        }
      }

      document.addEventListener("click", handleClick, listeningCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listeningCapturing);
    },
    [action, listeningCapturing]
  );

  return { ref };
}

export default useOutsideClick;
