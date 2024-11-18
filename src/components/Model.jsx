import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", {
      scrollTrigger: {
        trigger: "#heading",
        toggleActions: "restart none none none",
      },
      duration: 1,
      opacity: 1,
      y: -50,
      ease: "power4.out",
    });
  });

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="section-heading"
        >
          Take a closer look
        </h1>
      </div>
    </section>
  );
};

export default Model;
