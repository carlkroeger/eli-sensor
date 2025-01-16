import { IonicNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface EliSensorType {
    string_type: string;
    type: number;
    name: string;
}
export interface EliSensorData {
    data?: any;
    timestamp?: any;
}
export interface EliSensorOptions {
    frequency?: number;
    sensor_type?: number;
}
/**
 * @name Eli Sensor
 * @description
 * This plugin to read sensors into ionic native.
 * Future implementation of iOS support is also intended.
 * Will not give support for this project as it is for personal use only.
 *
 * @usage
 * ```typescript
 * import { EliSensor } from '@ionic-native/eli-sensor';
 *
 *
 * constructor(private eliSensor: EliSensor) { }
 *
 * ...
 *
 *
 * this.eliSensor.watch(options: EliSensorOptions)
 *   .subscribe((result: EliSensorData) => {
 *     var example = result.data;
 *     console.log('watch', example);
 *     return example;
 *   })
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class EliSensor extends IonicNativePlugin {
    getSensorList(): Promise<EliSensorType[]>;
    getCurrent(): Promise<EliSensorData>;
    watch(options?: EliSensorOptions): Observable<EliSensorData>;
}
