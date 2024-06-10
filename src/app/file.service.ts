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

  /*

  getFileByName(name: string): FileLocation {

  }

  getPaths(dirHandle: FileSystemDirectoryHandle) {
    const 
  }
  */
}
