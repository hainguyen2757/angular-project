import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  displayName:string="";
  constructor(private user: UserService, private fauth:AuthService) {
    this.user.getCurrentUser()
          .then(user=> 
            
            // console.log(user)
            this.displayName = user.displayName!=null? user.displayName: user.email);
		
				    console.log("Thong tin displayName"+this.displayName);
   }
   logout(){
    this.fauth.logout().then(res=>{location.href=""});
    
   }

  ngOnInit(): void {
  }

}
