import { Injectable } from '@angular/core';
import { FileLocation } from './file-location';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  /*
  Does not work with file systems, try creating an object with a list of FileLocations and update both this
  and the directory simultanously
  */

  fileSystem = require('fs');
  directory = "/assets/saved_files";
  file!: File;

  getAllFiles() {
    const fileList = this.fileSystem.readdir(this.directory, (error: Error, files: File[]) => {
      if(error){
        console.log('Error');
        return;
      }

      console.log('Files in Dir: ', fileList);
    });
    
    //return fileList;
  }

  setFile(file: File) {
    // TODO
    // calls a privare function that gets the actual (pdf) file
    this.file = file;
  }

  getFile(): File {
    return this.file;
  }

  //getFileByName(file: File): File { }

  
  /*

  getUploadedFile() {
    return this.file;
  }

  getPaths(dirHandle: FileSystemDirectoryHandle) {
    const 
  }
  */
}
