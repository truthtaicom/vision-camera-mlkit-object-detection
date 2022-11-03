import type { Frame } from 'react-native-vision-camera';

export interface DetectedObject {
  /**
   * Frame location
   */
  left: number;
  top: number;
  right: number;
  bottom: number;
  /**
   * TrackingID for an object
   */
  trackingID: number;
}

/**
 * Returns an array of matching `DetectedObject`s for the given frame.
 *
 */
export function mlDetectObject(frame: Frame): DetectedObject[] {
  'worklet';
  // @ts-ignore
  // eslint-disable-next-line no-undef
  return __mlDetectObject(frame);
}
