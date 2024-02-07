import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    /*  
        Run sth before a request is handled by the request handler 
    */
    console.log('Im running before the handler', context);
    /*  
        Run sth before a response is sent out
    */
    return handler.handle().pipe(
      map((data: any) => {
        console.log('Im running before response is sent out', data);
      }),
    );
  }
}