import React, { useRef } from "react";
import { Anchor, useRender } from "react-zdog";
import { TAU } from "zdog";
import Faces from "./Faces";
import One from "./sides/One";
import Two from "./sides/Two";
import Three from "./sides/Three";
import Four from "./sides/Four";
import Five from "./sides/Five";
import Six from "./sides/Six";
function DiceAnchor() {
  const rotation = [
    {
      x: 0,
      y: 0,
      z: 0,
      value: 1
    },
    {
      x: TAU / 4,
      y: 0,
      z: 0,
      value: 2
    },
    {
      x: 0,
      y: TAU / 4,
      z: 0,
      value: 3
    },
    {
      x: 0,
      y: (TAU * 3) / 4,
      z: 0,
      value: 4
    },
    {
      x: (TAU * 3) / 4,
      y: 0,
      z: 0,
      value: 5
    },
    {
      x: TAU / 2,
      y: 0,
      z: 0,
      value: 6
    }
  ];
  var rolled = 2;
  let ref = useRef(undefined);
  useRender(() => {
    ref.current.rotate.x = rotation[rolled - 1].x;
    ref.current.rotate.y = rotation[rolled - 1].y;
    ref.current.rotate.z = rotation[rolled - 1].z;
  });
  return (
    <Anchor ref={ref}>
      <Faces />
      <One translate={{ z: 30 }} />
      <Two
        rotate={{ x: TAU / 4 }}
        translate={{ y: 30 }}
        OneCopy1={{ y: 10 }}
        OneCopy2={{ y: -10 }}
      />
      <Three />
      <Four
        GRotate={{ y: TAU / 4 }}
        GTranslate={{ x: -30 }}
        TRotate1={{ x: 0 }}
        TTranslate1={{ x: -10, y: 10 }}
      />
      <Five />
      <Six
        GTranslate={{ z: 30 }}
        TRotate={{ x: 0, z: TAU / 4 }}
        TTranslate={{ x: 0, y: 0 }}
        FRotate={{ y: 0 }}
        FTranslate={{ x: 0 }}
      />
    </Anchor>
  );
}
export default DiceAnchor;