import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const DoorIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#BF6952"
      d="M19.335 22.667A1.333 1.333 0 0 1 18 24h-12a1.334 1.334 0 0 1-1.333-1.333V1.333A1.333 1.333 0 0 1 6.001 0h12a1.333 1.333 0 0 1 1.334 1.333v21.334Z"
    />
    <Path fill="#FFAC33" d="M7.332 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <Path
      fill="#AC5640"
      d="M16.668 2a.667.667 0 0 0-.667.667v6H7.335a.667.667 0 0 0 0 1.333h9.333a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 16.668 2Zm0 16.667a.667.667 0 0 1 .667.666v2a.667.667 0 0 1-.667.667H7.335a.666.666 0 1 1 0-1.333H16v-1.334a.667.667 0 0 1 .667-.666Z"
    />
    <Path
      fill="#854836"
      d="M7.335 22a.667.667 0 0 1-.667-.667v-2a.667.667 0 0 1 .667-.667h9.333a.667.667 0 0 1 0 1.333H8.001v1.334a.667.667 0 0 1-.666.666Z"
    />
    <Path
      fill="#AC5640"
      d="M16.668 14a.667.667 0 0 1 .667.667v2a.667.667 0 0 1-.667.666H7.335a.667.667 0 1 1 0-1.333H16v-1.333a.666.666 0 0 1 .667-.667Z"
    />
    <Path
      fill="#854836"
      d="M7.335 17.333a.667.667 0 0 1-.667-.666v-2A.667.667 0 0 1 7.335 14h9.333a.667.667 0 1 1 0 1.333H8.001v1.334a.667.667 0 0 1-.666.666Zm0-7.333a.667.667 0 0 1-.667-.667V2.667A.667.667 0 0 1 7.335 2h9.333a.667.667 0 0 1 0 1.333H8.001v6a.667.667 0 0 1-.666.667Z"
    />
  </Svg>
);
