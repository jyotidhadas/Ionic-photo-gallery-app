import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/images.service';
import { pipe, map,} from 'rxjs';
import { ActionSheetController, ModalController } from '@ionic/angular'
import { FullscreenViewPage } from '../fullscreen-view/fullscreen-view.page';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})


export class GalleryPage implements OnInit {

  albumId :any;
  id:any;
  title:any;
  imageUrl:any;
  thumbnilurl:any;
  filetreddata:any;
  currentPage = 1;
  imagePerPage = 10; 
  selectedImages: string[] = [];
   


  constructor(
    private http: HttpClient ,
     private apiService:ImagesService,
     public actionSheetController: ActionSheetController,
     private modalController: ModalController,
     ) { }
    //  private socialSharing: SocialSharing
  ngOnInit() {
    this.get()
  }
  get(){
  
    this.apiService.getData().subscribe(
      {
        next:(data: any)=>{
        
         this.filetreddata = data.filter((item: any)=>item.albumId );
         this.imageUrl = data.map((image: { url: any; })=>image.url);
         this.id = data.map((id: { id: any; })=> id.id);
         this.title = data.map((data: { title: any; }) => data.title);
         this.albumId = data.map((data: { albumId: any; }) => data.albumId);
         this.thumbnilurl = data.map((data: { thumbnailUrl: any; } ) => data.thumbnailUrl);
        },
        error:(error: any)=>{
          console.log(error)
        }
      }
      
    
    )
  };


getImagesforCurrentPage(){
  const startIndex = (this.currentPage -1)*this.imagePerPage;
  const endIndex = startIndex  + this.imagePerPage;
  return this.filetreddata.slice(startIndex,endIndex)
}

getTotalPages(): number {
  return Math.ceil(this.filetreddata.length / this.imagePerPage);
}

nextPage(){
  const totalPage = Math.ceil(this.filetreddata.length / this.imagePerPage);
  if(this.currentPage < totalPage){
    this.currentPage++;
  }
}

previousPage(){
  if(this.currentPage >1){
    this.currentPage--;
  }
}

async openFullScreenView(imagePath:string){
  const modal = await this.modalController.create({
    component:FullscreenViewPage,
    componentProps:{
      imagePath: imagePath
    },
    cssClass: 'fullscreen-modal'
  });
  await modal.present();
}



  // selectImage(imagePath: string) {
  //   const index = this.selectedImages.indexOf(imagePath);
  //   if (index > -1) {
  //     this.selectedImages.splice(index, 1);
  //   } else {
  //     this.selectedImages.push(imagePath);
  //   }
  // }

  // deleteSelectedImages() {
  //   this.filetreddata.url = this.filetreddata.url.filter((image: string) => !this.selectedImages.includes(image));
  //   this.selectedImages = [];
  // }

  // shareImage() {
  //   this.socialSharing.share('', '', this.filetreddata.url, '');
  // }
}

