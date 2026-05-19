export type Direction = 'rtl' | 'ltr';

export function isRtl(direction: Direction) {
  return direction === 'rtl';
}

export function dirClass(direction: Direction, ltrClass: string, rtlClass: string) {
  return isRtl(direction) ? rtlClass : ltrClass;
}

export function alignClass(direction: Direction) {
  return isRtl(direction) ? 'text-right' : 'text-left';
}

export function dirAwareSpace(direction: Direction, reverse = false) {
  if (direction === 'rtl') {
    return reverse ? 'flex-row' : 'flex-row-reverse';
  }

  return reverse ? 'flex-row-reverse' : 'flex-row';
}

export function logicalSpace(direction: Direction, startClass: string, endClass: string) {
  return isRtl(direction) ? endClass : startClass;
}

export function overlayOrigin(direction: Direction, ltrOrigin: string, rtlOrigin: string) {
  return isRtl(direction) ? rtlOrigin : ltrOrigin;
}

export function directionalTranslate(direction: Direction, ltrValue: number, rtlValue: number) {
  return isRtl(direction) ? rtlValue : ltrValue;
}
