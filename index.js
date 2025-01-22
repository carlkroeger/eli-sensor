var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var EliSensorOriginal = /** @class */ (function (_super) {
    __extends(EliSensorOriginal, _super);
    function EliSensorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EliSensorOriginal.prototype.getSensorList = function () { return cordova(this, "getSensorList", {}, arguments); };
    EliSensorOriginal.prototype.getCurrent = function () { return cordova(this, "getCurrent", {}, arguments); };
    EliSensorOriginal.prototype.watch = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.eliSensor.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.eliSensor.clearWatch(watchId); };
        });
    };
    EliSensorOriginal.pluginName = "EliSensor";
    EliSensorOriginal.plugin = "cordova-plugin-eli-sensor";
    EliSensorOriginal.pluginRef = "navigator.eliSensor";
    EliSensorOriginal.repo = "https://github.com/carlkroeger/cordova-plugin-eli-sensor.git";
    EliSensorOriginal.platforms = ["Android", "iOS"];
    return EliSensorOriginal;
}(AwesomeCordovaNativePlugin));
var EliSensor = new EliSensorOriginal();
export { EliSensor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VsaS1zZW5zb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBSU4sTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXFESCw2QkFBaUI7Ozs7SUFHOUMsaUNBQWE7SUFLYiw4QkFBVTtJQUlWLHlCQUFLLEdBQUwsVUFBTSxPQUEwQjtRQUM5QixPQUFPLElBQUksVUFBVSxDQUFnQixVQUFDLFFBQWE7WUFDakQsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztvQkFoRkg7RUEyRCtCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBJb25pY05hdGl2ZVBsdWdpbixcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBFbGlTZW5zb3JUeXBlIHtcbiAgc3RyaW5nX3R5cGU6IHN0cmluZztcbiAgdHlwZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsaVNlbnNvckRhdGEge1xuICBkYXRhPzogYW55O1xuICB0aW1lc3RhbXA/OiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsaVNlbnNvck9wdGlvbnMge1xuICBmcmVxdWVuY3k/OiBudW1iZXI7XG4gIHNlbnNvcl90eXBlPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIEVsaSBTZW5zb3JcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gdG8gcmVhZCBzZW5zb3JzIGludG8gaW9uaWMgbmF0aXZlLlxuICogRnV0dXJlIGltcGxlbWVudGF0aW9uIG9mIGlPUyBzdXBwb3J0IGlzIGFsc28gaW50ZW5kZWQuXG4gKiBXaWxsIG5vdCBnaXZlIHN1cHBvcnQgZm9yIHRoaXMgcHJvamVjdCBhcyBpdCBpcyBmb3IgcGVyc29uYWwgdXNlIG9ubHkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFbGlTZW5zb3IgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2VsaS1zZW5zb3InO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsaVNlbnNvcjogRWxpU2Vuc29yKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5lbGlTZW5zb3Iud2F0Y2gob3B0aW9uczogRWxpU2Vuc29yT3B0aW9ucylcbiAqICAgLnN1YnNjcmliZSgocmVzdWx0OiBFbGlTZW5zb3JEYXRhKSA9PiB7XG4gKiAgICAgdmFyIGV4YW1wbGUgPSByZXN1bHQuZGF0YTtcbiAqICAgICBjb25zb2xlLmxvZygnd2F0Y2gnLCBleGFtcGxlKTtcbiAqICAgICByZXR1cm4gZXhhbXBsZTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRWxpU2Vuc29yJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZWxpLXNlbnNvcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZWxpU2Vuc29yJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxrcm9lZ2VyL2NvcmRvdmEtcGx1Z2luLWVsaS1zZW5zb3IuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVsaVNlbnNvciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIGdldFNlbnNvckxpc3QoKTogUHJvbWlzZTxFbGlTZW5zb3JUeXBlW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnQoKTogUHJvbWlzZTxFbGlTZW5zb3JEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2F0Y2gob3B0aW9ucz86IEVsaVNlbnNvck9wdGlvbnMpOiBPYnNlcnZhYmxlPEVsaVNlbnNvckRhdGE+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8RWxpU2Vuc29yRGF0YT4oKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZWxpU2Vuc29yLndhdGNoKFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IG5hdmlnYXRvci5lbGlTZW5zb3IuY2xlYXJXYXRjaCh3YXRjaElkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19