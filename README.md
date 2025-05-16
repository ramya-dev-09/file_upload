For running the application in local, add the .env file with below properties
PORT=3000
FILE_PATH=public/uploads
RETRIEVE_FILE_PATH=../../public/uploads

1. To run the application use **npm run start**
2. For uploading the files use this url end point - localhost:3000/api/v1/upload and form request with key file
3. For retrieval of the uploaded files use this url - localhost:3000/api/v1/upload/{fileName}
