// src/utils/permissions.js
import { PermissionsAndroid, Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

export const requestPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      const grantedMicrophone = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );

      const grantedContacts = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );

      const grantedCallLog = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      );

      const grantedPhoneState = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      );

      const grantedNotification = await request(PERMISSIONS.ANDROID.BIND_NOTIFICATION_LISTENER_SERVICE);

      if (
        grantedMicrophone === PermissionsAndroid.RESULTS.GRANTED &&
        grantedContacts === PermissionsAndroid.RESULTS.GRANTED &&
        grantedCallLog === PermissionsAndroid.RESULTS.GRANTED &&
        grantedPhoneState === PermissionsAndroid.RESULTS.GRANTED &&
        grantedNotification === 'granted'
      ) {
        console.log('All permissions granted');
      } else {
        console.log('Permissions denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

