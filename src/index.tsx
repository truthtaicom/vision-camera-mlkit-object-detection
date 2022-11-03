import type { Frame } from 'react-native-vision-camera';

// export interface DetectedObject {
//   /**
//    * Frame location
//    */
//   left: number;
//   top: number;
//   right: number;
//   bottom: number;
//   /**
//    * TrackingID for an object
//    */
//   trackingID: number;
// }
//
// /**
//  * Returns an array of matching `DetectedObject`s for the given frame.
//  *
//  */
export function detectObjects(frame: Frame) {
  'worklet';
  // @ts-ignore
  return __detectObjects(frame);
}
