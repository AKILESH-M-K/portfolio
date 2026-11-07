// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Mock IntersectionObserver for Jest jsdom environment
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = window.IntersectionObserver || MockIntersectionObserver;

// Mock window.matchMedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
    };
  };

// Mock window.scrollTo
window.scrollTo = window.scrollTo || function () {};
