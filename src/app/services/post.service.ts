import{Subject} from 'rxjs-compat/Subject';

export class PostService{



 postSubject = new Subject<any[]>();
 
 
 private posts = [
    
        {
          title: 'One Piece',  
          content: 'Amadeuis katus is status infernus albastus if need to compare to outself each others hand so that we apply something smooth and good',  
          
          created_at: new Date()
        },
    
      {
        title:'Amshterdam',  
        content: 'Amadeuis katus is status infernus albastus if need to compare to outself each others hand so that we apply something smooth and good',  
         
        created_at: new Date()
      },
   
      {
      title: 'La morag tang',  
      content: 'Amadeuis katus is status infernus albastus if need to compare to outself each others hand so that we apply something smooth and good',  
        
      created_at: new Date()
      
    
      }
  ];

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }
  


  
}