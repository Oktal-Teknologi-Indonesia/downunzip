// Create Directory function
function makedir(dirName) {
    window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory + "files/", (dirEntry) => {
      dirEntry.getDirectory(dirName, { create: true }, (directoryEntry) => {
        console.log("Directory created: " + directoryEntry.name);
        document.getElementById("infodir").innerHTML = "<p> Directory " + cordova.file.externalApplicationStorageDirectory  + "files/" + directoryEntry.name + " created</p>";
      }, (error) => {
        console.error("Error creating directory: " + error.code);
        document.getElementById("infodir").innerHTML = "<p> Directory " + cordova.file.externalApplicationStorageDirectory + "files/" + directoryEntry.name + " creation failed</p>";
      });
    });
  }

  //   Download file function
  function downloadFile() {
    // Specify the URL of the file you want to download
    var fileUrl = 'https://gpsmon.oktal.dev/wallpaper.zip';

    // Specify the directory where you want to save the downloaded file
    var targetPath = cordova.file.externalDataDirectory + 'oktalmedia/wallpaper.zip';

    // Use cordova-plugin-advanced-http for the download
    document.getElementById("infodl").innerHTML="<p>download function excecuted</p>";
    cordova.plugin.http.downloadFile(fileUrl, {}, {}, targetPath, function(entry) {
        console.log('File downloaded successfully:', entry.toURL());
        document.getElementById("infodl").innerHTML="<p>Download Success</p>";

        // You can add further logic here to handle the downloaded file
    }, function(error) {
        console.error('Error downloading file:', error);
        document.getElementById("infodl").innerHTML="<p>Download Failed</p>";
    });
}
  
//   Unzip downloaded file
function unzip() {
      // zip.unzip(<source zip>, <destination dir>, <callback>, [<progressCallback>]);
    let sfile = cordova.file.externalDataDirectory + 'oktalmedia/wallpaper.zip';
    let tgdir = cordova.file.externalDataDirectory + 'oktalmedia';
    zip.unzip(sfile,tgdir,function(i)
    {
      document.getElementById("infozip").innerHTML = "Unzip resul : " + i;
    },false);
}

// List files in a directory
function listFiles() {
  // Specify the directory you want to list
  var directoryPath = cordova.file.externalDataDirectory+'oktalmedia';

  // Use the cordova-plugin-file API to access the file system
  window.resolveLocalFileSystemURL(directoryPath, function (directoryEntry) {
      var directoryReader = directoryEntry.createReader();

      // Read the directory entries
      directoryReader.readEntries(
          function (entries) {
              displayFileList(entries);
          },
          function (error) {
              console.error('Error reading directory:', error);
          }
      );
  }, function (error) {
      console.error('Error resolving directory URL:', error);
  });
}

// display filenames in a directory
function displayFileList(entries) {
  var fileList = document.getElementById('filenames');

  // Clear previous list
  fileList.innerHTML = '';

  entries.forEach(function (entry) {
      var listItem = document.createElement('li');
      listItem.textContent = entry.name;
      fileList.appendChild(listItem);
  });
}

function onDeviceReady(){
    document.getElementById("mkdir").addEventListener("click",function(){
      makedir('oktalmedia');
    });
}
document.addEventListener("deviceready", onDeviceReady, false);
document.getElementById("download").addEventListener("click",function(){
  alert("download clicked");
  downloadFile();
})

document.getElementById("unzip").addEventListener("click",function(){
  document.getElementById("infozip")
  unzip();
})

document.getElementById("listfiles").addEventListener("click",function(){
  listFiles();
})