import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap;
// * scrollTrigger must be registered before using it
gsap.registerPlugin(ScrollTrigger);

/**
 * ? short form of gsap to with scrollTrigger implemented
 * @param {string} target
 * @param {gsap.TweenVars} animationProps
 * @param {gsap.DOMTarget | ScrollTrigger.Vars | undefined} scrollProps
 */
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      // ? it will trigger when top of the trigger target is 85% of the viewport
      start: "top 90%",
      ...scrollProps,
    },
  });
};
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  timeline.to(
    firstTarget,
    { ...animationProps, ease: "power2.inOut" },
    // ? it will put the animation at the start of the previous animation
    "<"
  );
  timeline.to(
    secondTarget,
    { ...animationProps, ease: "power2.inOut" },
    // ? it will put the animation at the start of the previous animation
    "<"
  );
};
