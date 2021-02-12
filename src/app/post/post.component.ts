import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  @Input() title : string;
  @Input() created_at: Date;
  @Input() content: string;
  loveIts: number =0;
  



  constructor() { }

  ngOnInit(): void {
  }
  decreaseLikes(){
    
    this.loveIts-=1;
    console.log('likes Decreased by one : '+this.loveIts);
    
   

    
  }

  increaseLikes(){
   
    this.loveIts+=1;
    console.log('likes Increase by one : '+this.loveIts);
      
     
  
  }

}
