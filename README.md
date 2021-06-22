# MTW_Automotive_Consultants

## Description
Website developed by RATTS.Ltd
Licensed by MTW Automotive Consultants.Ltd

The contents of this project are not to be used, copied, redistributed, or otherwise misused by anyone who is not licensed to do so,
failure to do so will fall within misuse of MTW Automotive Consultants.Ltd copyright.

The contents of this project have been tested. However, RATTS.Ltd or MTW Automotive Consultants.Ltd shall not be held responsible for any damages
caused by said project if you are to encounter any errors or issues.

If you do encounter issues with the project, please contact RATTS.Ltd at:
  rattsltd@gmail.com


## Setup
After pulling the repo from git, run the following commands to prepare for deployment:

### Set environment variables
The following environment variables must be set:
```
NODE_ENV=production
PORT=[port number]
```

### Install server dependencies
`npm install --only-prod`

### Install client dependencies
`npm install --prefix client`

### Build client
`npm run build --prefix client`

### Start server
`npm start`