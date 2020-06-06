# ppp-dl-bot
Download videos from p-p-p.tv. It uses the video stream not the download link to avoid the 1/day limitation.

# How to use
 - [Install Node](https://nodejs.org/) (Any one of the two suggested versions should work)
 - [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)
 - [Install Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
 - For the converter:
   - [Install FFMPEG](https://www.ffmpeg.org/download.html)
 - Open a terminal window (Windows: Press Windows + R => Type `cmd` => Press Enter, Linx/Mac: look yourself :))
 - In the terminal window:
    -  Navigate to the location you want to checkout the project
       -  (Windows: cd %USERPROFILE%\Documents, Linx/Mac: look yourself :))
    -  Checkout project: Run `git clone https://github.com/xX53xXx/ppp-dl-bot.git`
    -  Enter the projects dir: Run `cd ppp-dl-bot`
    -  Copy `dev.settings.json` to `settings.json` and edit `settings.json`
       -  (Put in your credentials and destination directory)
    -  Run `yarn install` in project dir
    -  Run `yarn start` in project dir // Run `yarn start --unmute` to start downloader unmuted
    -  Run `yarn convert` after downloads are finished.
       -  WARNING: At time it is not recommended to run the converter in parallel with the download process or with an other converter. (WIP)

# Settings documentation
Documentation which possibilities you have in the `settings.json` file.
```js
{
    "account": {
        "username": "", // (Required) Your username    You credentials are save if you use my code. You can look through the code, there is no backdor or sth. like that.
        "password": "" // (Required) Your password     No warranty if you use code from a fork. Take care not to push your credentials. settings.json is per default in .gitignore
    },
    "downloadsDir": "./out", // (Required) Where to store the downloaded files
    "videoPartTimeout": 10, // (Optional) Time in seconds how long to wait for the initial video stream befor the video gets the status 'broken' and the download continues with the next
    "converter": {
        "dropDir": "./temp", // (Optional) Where to move the not required files after converting process. If null, the files will be deleted.
        "ffmpegPath": "" // (Optional) The path to the ffmpeg programm on your system. If not set, that one in the PATH env var will be used.
    }
}
```

# Changelog
## 1.0.0
- Download mechanisum hard changed.
  - Download speed super duper hard improved.
  - Download stability hard improved.
  - Pause/Resume download on internet failures implemented.
- Converter full implemented. (beta state)
  - Supports converting while downloads are in progress.
  - Supports multi machine converting in parallel.
  - Watches out for new files to convert if converting process is faster than download.
- Stability improved.
- Temp dir useage set to be deprecated. (Maybe will be removed in the future)
- Bugfix: Sometimes the videos ware not downloaded in full length.
- Bugfix: Crash on moving the video from temp dir to destination dir if both dirs are on different partitions or drives.
  
## 0.0.1
- Feature: Login.
- Feature: Check current maximum amount of videos.
- Feature: Run from 1 to current ammount of videos and check if thay are in the database file with the downloadStatus `done`.
  - Skip if downloadStatus is `done`
  - Start video download otherwise
- Feature: Save state in a databse JSON file.
- Feature: Settings file which can hold user credentials for auto login.

# Chears
### Author: xX53xXx