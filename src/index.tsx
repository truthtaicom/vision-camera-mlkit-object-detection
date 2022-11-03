/* eslint-disable no-undef */
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
  // @ts-expect-error Frame Processors are not typed.
  return __mlDetectObject(frame);
}
