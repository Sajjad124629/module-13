import { NextResponse } from 'next/server'
import {headers} from "next/headers";

export async function GET(request, response) {
    const list = headers();
    const user_id = list.get('user_id');
    const user_email = list.get('user_email');
    // return NextResponse.json({user_id:user_id, user_email:user_email});
    return NextResponse.json([
        {user_id:user_id, user_email:user_email}
      ],{status:201,headers:{'user_id':user_id,"user_email":user_email}});
   }