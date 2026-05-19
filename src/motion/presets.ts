import anime from 'animejs';

export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 5200,
    marquee: 30000,
  },
  easing: {
    standard: 'easeOutCubic',
    entrance: 'cubicBezier(0.22, 1, 0.36, 1)',
    emphasis: 'easeOutExpo',
    linear: 'linear',
  },
  distance: {
    xs: 8,
    sm: 14,
    md: 20,
    lg: 28,
  },
  scale: {
    hover: 1.02,
    lift: 1.01,
  },
};

function resolveElements(targets: anime.AnimeTarget) {
  if (targets instanceof HTMLElement) {
    return [targets];
  }

  if (Array.isArray(targets)) {
    return targets.filter((target): target is HTMLElement => target instanceof HTMLElement);
  }

  return [];
}

function beginReveal(targets: anime.AnimeTarget) {
  resolveElements(targets).forEach((element) => {
    element.dataset.revealState = 'revealing';
    element.style.willChange = 'transform, opacity, filter';
  });
}

function finalizeReveal(targets: anime.AnimeTarget) {
  resolveElements(targets).forEach((element) => {
    element.dataset.revealState = 'revealed';
    element.style.opacity = '1';
    element.style.transform = 'none';
    element.style.filter = 'none';
    element.style.willChange = '';
  });
}

export function revealUp(targets: anime.AnimeTarget, delay = 0) {
  anime.remove(targets);
  beginReveal(targets);

  return anime({
    targets,
    translateY: [motionTokens.distance.md, 0],
    opacity: [0, 1],
    filter: ['blur(8px)', 'blur(0px)'],
    duration: 560,
    delay,
    easing: motionTokens.easing.entrance,
    complete: () => finalizeReveal(targets),
  });
}

export function revealLeft(targets: anime.AnimeTarget, delay = 0) {
  anime.remove(targets);
  beginReveal(targets);

  return anime({
    targets,
    translateX: [motionTokens.distance.md, 0],
    opacity: [0, 1],
    filter: ['blur(8px)', 'blur(0px)'],
    duration: 520,
    delay,
    easing: motionTokens.easing.entrance,
    complete: () => finalizeReveal(targets),
  });
}

export function revealScale(targets: anime.AnimeTarget, delay = 0) {
  anime.remove(targets);
  beginReveal(targets);

  return anime({
    targets,
    scale: [0.96, 1],
    opacity: [0, 1],
    filter: ['blur(8px)', 'blur(0px)'],
    duration: 520,
    delay,
    easing: motionTokens.easing.entrance,
    complete: () => finalizeReveal(targets),
  });
}

export function floatLoop(targets: anime.AnimeTarget, amplitude = 10, duration = motionTokens.duration.loop) {
  return anime({
    targets,
    translateY: [0, -amplitude, 0],
    duration,
    easing: 'easeInOutSine',
    loop: true,
  });
}

export function pulseGlow(targets: anime.AnimeTarget, duration = 3600) {
  return anime({
    targets,
    boxShadow: [
      '0 0 0 rgba(255, 191, 80, 0)',
      '0 0 42px rgba(255, 191, 80, 0.18)',
      '0 0 0 rgba(255, 191, 80, 0)',
    ],
    duration,
    easing: 'easeInOutSine',
    loop: true,
  });
}

export function countMetric(el: HTMLElement, from: number, to: number, duration = 1400) {
  const state = { value: from };

  return anime({
    targets: state,
    value: to,
    round: 1,
    duration,
    easing: motionTokens.easing.standard,
    update: () => {
      el.textContent = state.value.toLocaleString('en-US');
    },
  });
}

export function animateBar(el: HTMLElement, value: number, delay = 0) {
  return anime({
    targets: el,
    width: ['0%', `${value}%`],
    opacity: [0.35, 1],
    duration: 460,
    delay,
    easing: motionTokens.easing.entrance,
  });
}

export function drawPath(el: SVGPathElement, duration = 800) {
  const length = el.getTotalLength();
  el.style.strokeDasharray = `${length}`;
  el.style.strokeDashoffset = `${length}`;

  return anime({
    targets: el,
    strokeDashoffset: [length, 0],
    opacity: [0.45, 1],
    duration,
    easing: motionTokens.easing.standard,
  });
}

export function marqueeTrack(el: HTMLElement, distance: string, duration = motionTokens.duration.marquee) {
  return anime({
    targets: el,
    translateX: ['0%', distance],
    duration,
    easing: motionTokens.easing.linear,
    loop: true,
  });
}

export function hoverLift(el: HTMLElement) {
  const enter = () => {
    if (el.dataset.revealState && el.dataset.revealState !== 'revealed') {
      return;
    }

    anime.remove(el);
    return anime({
      targets: el,
      translateY: -6,
      scale: motionTokens.scale.lift,
      duration: 240,
      easing: motionTokens.easing.standard,
    });
  };

  const leave = () => {
    anime.remove(el);
    return anime({
      targets: el,
      translateY: 0,
      scale: 1,
      duration: 240,
      easing: motionTokens.easing.standard,
    });
  };

  el.addEventListener('mouseenter', enter);
  el.addEventListener('mouseleave', leave);

  return () => {
    el.removeEventListener('mouseenter', enter);
    el.removeEventListener('mouseleave', leave);
  };
}

export function hoverTilt(
  el: HTMLElement,
  options?: {
    maxX?: number;
    maxY?: number;
  },
) {
  const maxX = options?.maxX ?? 4;
  const maxY = options?.maxY ?? 6;

  const move = (event: MouseEvent) => {
    if (el.dataset.revealState && el.dataset.revealState !== 'revealed') {
      return;
    }

    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * maxX * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * maxY * -2;

    anime.remove(el);
    anime({
      targets: el,
      rotateX: y,
      rotateY: x,
      duration: 240,
      easing: motionTokens.easing.standard,
    });
  };

  const leave = () => {
    if (el.dataset.revealState && el.dataset.revealState !== 'revealed') {
      return;
    }

    anime.remove(el);
    anime({
      targets: el,
      rotateX: 0,
      rotateY: 0,
      duration: 240,
      easing: motionTokens.easing.standard,
    });
  };

  el.addEventListener('mousemove', move);
  el.addEventListener('mouseleave', leave);

  return () => {
    el.removeEventListener('mousemove', move);
    el.removeEventListener('mouseleave', leave);
  };
}
