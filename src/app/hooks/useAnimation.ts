import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useAnimation(
  animationFn: (targets: gsap.TweenTarget, vars?: gsap.TweenVars) => gsap.core.Tween,
  targets: gsap.TweenTarget,
  vars?: gsap.TweenVars
) {
  const animationRef = useRef<gsap.core.Tween>();

  useEffect(() => {
    animationRef.current = animationFn(targets, vars);
    return () => {
      animationRef.current?.kill();
    };
  }, [animationFn, targets, vars]);

  return animationRef;
}
