import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

export const EyeCrossedIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.682 4.692 19.31 19.32M10.47 11.007a1.626 1.626 0 0 0 2.299 2.3"
    />
    <Path
      fill="#fff"
      d="M9.651 5.893a.75.75 0 1 0 .413 1.442L9.65 5.893Zm2.35.424-.003.75H12v-.75Zm8.126 5.69.651.371a.75.75 0 0 0 0-.744l-.651.372Zm-2.585 2.325a.75.75 0 1 0 1.102 1.018l-1.102-1.018Zm-.77 2.643a.75.75 0 0 0-.838-1.243l.839 1.243ZM3.874 12.006l-.651-.372a.75.75 0 0 0 0 .745l.651-.373Zm4.185-3.72a.75.75 0 0 0-.842-1.24l.842 1.24Zm2.006-.95c.629-.18 1.28-.27 1.934-.269l.005-1.5a8.443 8.443 0 0 0-2.352.326l.413 1.442ZM12 7.066c2.891 0 5.39 1.66 7.476 5.311l1.302-.744C18.53 7.699 15.611 5.567 12 5.567v1.5Zm7.476 4.567c-.61 1.066-1.255 1.963-1.934 2.698l1.102 1.018c.77-.833 1.48-1.826 2.134-2.972l-1.302-.744Zm-3.542 4.098c-1.204.811-2.508 1.213-3.934 1.213v1.5c1.73 0 3.325-.494 4.773-1.47l-.84-1.243ZM12 16.945c-2.891 0-5.39-1.66-7.476-5.31l-1.302.744C5.47 16.314 8.389 18.445 12 18.445v-1.5ZM4.524 12.38C5.598 10.5 6.782 9.153 8.058 8.287l-.842-1.242C5.7 8.075 4.373 9.62 3.222 11.635l1.302.744Z"
    />
  </Svg>
);
