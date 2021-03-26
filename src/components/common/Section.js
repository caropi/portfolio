import React from "react";
import PortableText from "@common/PortableText";
import SkillList from "@common/SkillList";
import Lottie from "lottie-react";

import animationData from "@images/animation.json";
import LottieAnimation from "./LottieAnimation";

export default function Section(props) {
  return (
    <section className="bg-green text-beige ">
      <div className="container py-6">
        <div className="row flex-wrap justify-space-between align-items-center">
          <div className="col-md-6">
            <h2>{props.block.heading}</h2>
            <PortableText blocks={props.raw.richText} />
          </div>
          <div className="col-5 d-flex align-items-center animation">
            <LottieAnimation json={animationData} />
            {/* <Lottie animationData={animationData} height={400} width={400} /> */}
          </div>
        </div>
        <div className="row justify-content-between">
          {props.block.list.map((i) => (
            <SkillList item={i} key={i._key} />
          ))}
        </div>
      </div>
    </section>
  );
}
