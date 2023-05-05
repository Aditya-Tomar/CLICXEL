import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    consrtuctor(){}

    public authenticate(): Observable<string> {
        return of('a');
    }
}