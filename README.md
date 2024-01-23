# DOWNUNZIP

## Deskripsi
Contoh aplikasi sederhana untuk:
- Membuat directory di Internal/Android/data/< app-id >/files
- Mengunduh file ke directory yang sudah dibaut
- Mengekstrak file zip
- Menampilkan isi directory

## Development

cordova create downzip id.oktal.downzip downzip
### Plugins
cordova plugin add cordova-plugin-advanced-http\
cordova plugin add cordova-plugin-file\
cordova plugin add cordova-plugin-zip\
### Platform
cordova platform add android
cordova platform add browser

## Debuging di browser
- Pastikan perangkat sudah enable usb debugging
- Buka browser berbasis chrome ( chrome, chromium, brave, thorium, dll)
- buka chrome://inspect
- klik inspect \
sumber: https://riptutorial.com/cordova/example/13976/debug-on-android-device-using-usb