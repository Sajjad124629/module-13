import { NextResponse } from "next/server";
import { redirect } from 'next/navigation';
export function middleware(request,response){

    if(request.nextUrl.pathname.startsWith("/api/redirect")){
        const url = request.nextUrl.clone()   
        if (url.pathname === '/') {
          url.pathname = '/about'
          return NextResponse.redirect(url)   
        } 
    }
  else if(request.nextUrl.pathname.startsWith("/api/auth")){
    return NextResponse.next();
  }
   else if(request.nextUrl.pathname.startsWith("/api/header")){
        const requestHeaders = new Headers(request.headers)
        const token  = requestHeaders.get("token");
        if(token =="XYZ-123-ABC"){
          requestHeaders.set('user_id','001'); 
          requestHeaders.set('user_email','sh8170468@gmail.com');
          return  NextResponse.next({      
           request:{headers:requestHeaders}  
          });
        }
        else{
          return NextResponse.json({},{status:401});
        }
     }
    
}