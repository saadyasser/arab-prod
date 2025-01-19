/**
 * Custom hook to handle outside click detection.
 * This hook allows you to detect clicks outside of an element and take action (e.g., close a dropdown, modal, etc.).
 *
 * @param initialState - Initial state for whether the dropdown or element is open or closed (true or false).
 *
 * @returns {Object}
 * - `isOpen`: Boolean indicating if the element is open or closed.
 * - `setIsOpen`: A function to set the `isOpen` state.
 * - `ref`: A ref to attach to the target element for detecting outside clicks.
 *
 * @example
 * const { isOpen, setIsOpen, ref } = useOutsideClick<HTMLDivElement>(false);
 *
 * return (
 *   <div ref={ref}>
 *     {isOpen && <div>Dropdown Content</div>}
 *   </div>
 * );
 */

import { useEffect, useRef, useState } from "react";

function useOutsideClick<T extends HTMLElement>(initialState: boolean) {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef<T | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, ref };
}

export default useOutsideClick;
