//Angular
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Router, RouteConfig,RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

//LoggedInOutlet
import {LoggedInRouterOutlet} from '../authentication/LoggedInOutlet';


//component
import {ProjetsListComponent} from '../projets/projets-list.component';
import {NewProjetComponent} from "../projets/new-project.component";

//Service
import {FirebaseService} from "../login/firebase.service"


@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [ROUTER_DIRECTIVES],
    pipes : [TranslatePipe]
})
@RouteConfig([   
    {path: '/', component: ProjetsListComponent,name: 'Projets', useAsDefault: true},
    {path: '/PROJECT', component: NewProjetComponent , name: 'NewProjet'}
        
])

export class HomeComponent{
    
    logged: boolean;
    
           
    public username: String;
    public password: String;
    
constructor(private router: Router, public translate: TranslateService) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}
    
    
    logout() {
        event.preventDefault();
  
        //this.logged = false;
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
	    this.router.parent.navigateByUrl('/AUTH');
	}
}
