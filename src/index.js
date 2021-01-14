const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require("fs");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 870,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.







function call() {
  let num = document.getElementById("appel").value;
  let path = "./src/data/history.txt";
  var date = new Date();
  var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  


  if (fs.existsSync(path)) {
   
    fs.appendFile(
      path,
      num + " " + today + " " + time + " \n",
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  } else {
    fs.writeFile(path, num + " " + today + " " + time + " \n", (err) => {
      if (err) throw err;
    
    });
  }
};



function store() {
  let num = document.getElementById("appel").value;
  let name = document.getElementById("namee").value;
  let path = "./src/data/contacts.txt";



  if (fs.existsSync(path)) {
    
    fs.appendFile(path, name + " " + num + " \n", function (err) {
      if (err) {
        console.log(err);
      } 
    });
  } else {
    fs.writeFile(path, name + " " + number + " \n", (err) => {
      if (err) throw err;
    });
  }
}


function contacts() {
  let path = "./src/data/contacts.txt";

  fs.readFile(path, "utf-8", (err, contacts) => {
    if (err) {
      alert(err.message);
      return;
    }


    let ul = document.querySelector(".list-group");
    for (var i = 0; i < contacts.toString().split(/\r?\n/).length - 1; i++) {
    
      ul.innerHTML +=`
      <li class="list-group-item list-group-item-dark">
      <i class="fas fa-user-circle"></i>
          ${contacts.toString().split(/\r?\n/)[i]}
      </li>
      `;
    }
  });
}



function history() {
  let path = "./src/data/history.txt";

  fs.readFile(path, "utf-8", (err, history) => {
    if (err) {
      alert(err.message);
      return;
    }


    let ul = document.querySelector(".list-group");
    for (var i = 0; i < history.toString().split(/\r?\n/).length - 1; i++) {
    
      ul.innerHTML +=`
      <li class="list-group-item list-group-item-dark">
          ${history.toString().split(/\r?\n/)[i]}
      </li>
      `;
    }
  });
}