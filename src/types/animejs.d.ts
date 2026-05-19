declare module 'animejs' {
  namespace anime {
    type AnimeValue = string | number | Array<string | number>;
    type AnimeTarget =
      | string
      | Element
      | Element[]
      | NodeList
      | HTMLCollection
      | Record<string, unknown>
      | null
      | undefined;

    interface AnimeParams {
      targets?: AnimeTarget;
      duration?: number;
      delay?: number;
      easing?: string;
      loop?: boolean;
      autoplay?: boolean;
      direction?: string;
      opacity?: AnimeValue;
      scale?: AnimeValue;
      translateX?: AnimeValue;
      translateY?: AnimeValue | ((_target: Element, index: number) => AnimeValue);
      rotateZ?: AnimeValue | ((_target: Element, index: number) => AnimeValue);
      round?: number;
      update?: () => void;
      [key: string]: unknown;
    }

    interface AnimeInstance {
      add: (params: AnimeParams, timelineOffset?: number) => AnimeInstance;
      pause: () => void;
      play: () => void;
      restart: () => void;
    }
  }

  interface AnimeStatic {
    (params: anime.AnimeParams): anime.AnimeInstance;
    timeline: (params?: anime.AnimeParams) => anime.AnimeInstance;
    remove(targets: anime.AnimeTarget): void;
    stagger: (value: number, params?: Record<string, unknown>) => number;
  }

  const anime: AnimeStatic;

  export default anime;
}
