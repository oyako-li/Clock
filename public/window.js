const { BrowserWindow } = require('electron');
const path = require("path");

// default window settings
const defaultProps = {
    width: 500,
    height: 800,
    show: false,
    webPreferences: {
        preload: path.join(__dirname, "./preload.js"),
    },
};

class Window extends BrowserWindow {
    constructor({ file, ...windowSettings }) {
        super({ ...defaultProps, ...windowSettings });
        // this.file = file;
        this.loadFile(file);
        this.once('ready-to-show', () => {
            this.show();
        });
    }

}

module.exports = Window;
