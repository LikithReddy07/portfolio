declare module "animated-backgrounds" {
  import { FC } from "react";

  interface AnimatedBackgroundProps {
    animationName: string;
  }

  export const AnimatedBackground: FC<AnimatedBackgroundProps>;
}
