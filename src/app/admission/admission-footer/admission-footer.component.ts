import { Component } from '@angular/core';
import { faPenToSquare,faFloppyDisk,faDownload,faShopSlash } from '@fortawesome/free-solid-svg-icons';
import { faSlash,faX,faReply} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-admission-footer',
  templateUrl: './admission-footer.component.html',
  styleUrls: ['./admission-footer.component.css']
  
})
export class AdmissionFooterComponent {
  faPenToSquare=faPenToSquare;
  faFloppyDisk=faFloppyDisk;
  faDownload=faDownload;
  faSlash=faSlash;
  faX=faX;
  faReply=faReply;
}
