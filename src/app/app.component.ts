import { Component, Output } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';
import { filter } from 'minimatch';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name= "";
  email= "";

  constructor(private oauthService:OAuthService){
    this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oauthService.initImplicitFlow();
  }
  
  logout(){
    this.oauthService.logOut();
  }

  get token(){
    let claims:any = this.oauthService.getIdentityClaims();
    console.log(this.oauthService.getAccessToken());
    console.log(claims['name']);
    console.log(claims['email']);
    console.log(claims)

    this.name = claims['name'];
    this.email = claims['email'];

    //this.oauthService.load
    //console.log(this.oauthService.loadUserProfile());
    return claims ? claims : null;
  }
}
