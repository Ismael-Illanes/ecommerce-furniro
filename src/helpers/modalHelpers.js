import { useEffect } from "react";

/**
 * Accesses the computed styles of the :root element, which includes all the CSS variables defined at the root level.
 * @returns {string} The primary color value.
 */
export const getColor = (color) => {
  const rootStyles = getComputedStyle(document.documentElement);

  return rootStyles.getPropertyValue(`${color}`);
};

/**
 * Updates the visibility of arrow box based on the scroll position.
 * @param {Function} setShowArrow - A function to update the state indicating if the arrow should be shown.
 */
export const handleScroll = (setShowArrow) => {
  const scrollTop = document.documentElement.scrollTop;
  setShowArrow(scrollTop > window.innerHeight * 0.5);
};

/**
 * Closes a header if a click is detected outside of the specified overlay element.
 * @param {Event} event - The click event object.
 * @param {Object} overlayRef - A React ref object for the overlay element.
 * @param {Function} setShowHeader - A function to update the state indicating if the header should be shown.
 */
export const handleClickOutside = (event, overlayRef, setShowHeader) => {
  if (overlayRef.current && !overlayRef.current.contains(event.target)) {
    setShowHeader(false);
  }
};

/**
 * Smoothly scrolls the window to the top of the page.
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Adds and removes an event listener to the document for a specified event.
 * @param {string} eventName - The name of the event to listen for (e.g., 'scroll', 'click').
 * @param {Function} handler - The function to call when the event is triggered.
 * @param {Array} [dependencies=[]] - Optional array of dependencies that determines when the effect should re-run.
 */
export const useEventListener = (eventName, handler, dependencies = []) => {
  useEffect(() => {
    const handlerWrapper = (event) => handler(event);
    document.addEventListener(eventName, handlerWrapper);
    return () => document.removeEventListener(eventName, handlerWrapper);
  }, dependencies);
};
