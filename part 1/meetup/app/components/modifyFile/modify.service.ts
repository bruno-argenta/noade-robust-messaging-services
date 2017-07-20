import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ModifyService{

    constructor(private http: Http){}

    modify(email:string, text: string): Observable<any>{
        return this.http.post("http://localhost:8081/modifyFile",{email:email,text:text})
                        .map((res:Response) => res.json())                        
                        
    }
}
