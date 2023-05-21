import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
const jwt =require("jsonwebtoken")

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    console.log(req.headers['token'])
    try {
      var decoded = jwt.verify(req.headers['token'], 'jsonwebtokensecret');
      if(decoded){
       req.user=decoded
        return decoded
      } 
    } catch(err) {
      // err
      return false; //req.session.userId;
    }
    
  }
}
