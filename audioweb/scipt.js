var tests = {
    proximity: 'onuserproximity' in window,
    light: 'ondevicelight' in window,
    vibration: 'vibrate' in window.navigator,
    notification: 'Notification' in window
 };