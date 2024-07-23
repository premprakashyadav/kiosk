import { Component, OnInit } from '@angular/core';
import { Emitter } from '../emitters/auth.emitter';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false ;

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    Emitter.authEmitter.subscribe(res=>{
      this.isLoggedIn = res
    })
  }

  logout(){
    this.tokenService.deleteAccessToken()
    this.tokenService.deleteRefreshToken()
    Emitter.authEmitter.emit(false)
  }

}
