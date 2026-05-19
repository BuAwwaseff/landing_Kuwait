export function observeOnce(
  element: HTMLElement,
  onEnter: () => void | (() => void),
  options?: IntersectionObserverInit,
) {
  let animationCleanup: void | (() => void);

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    if (!entry?.isIntersecting) {
      return;
    }

    animationCleanup = onEnter();
    observer.disconnect();
  }, options);

  observer.observe(element);

  return () => {
    observer.disconnect();

    if (typeof animationCleanup === 'function') {
      animationCleanup();
    }
  };
}

