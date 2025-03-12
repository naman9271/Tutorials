import {app , BrowserWindow} from 'electron';
import path from 'path';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(path.join(app.getPath(),'/dist-react/index.html'));
})