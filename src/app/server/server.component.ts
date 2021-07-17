import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .onshore{
        color: white;
       }
    `]
})

export class ServerComponent {
    name: string = 'CNA';
    status: string = 'offshore';

    constructor()
    {
        this.status = Math.random() > 0.5 ? 'onshore' : 'offshore' ;
        this.name = Math.random() > 0.5 ? 'CNA' : 'ADSA';
    }

    getName()
    {
        return this.name;
    }

    getColor()
    {
        return this.status === 'onshore' ? 'green' : 'red';
    }

}
