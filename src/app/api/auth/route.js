import { NextResponse } from "next/server";
import {headers} from "next/headers";

export async function GET(req,res){
    let csrf_token = req.cookies.get('theme');
    return NextResponse.json({msg:csrf_token,message: "Welcome to our API!",version: "1.0"});
}

export async function POST(req,res){
    let headersList  = headers();
    let themeData = headersList.get('theme');
    return NextResponse.json([
        {msg:headersList}
      ],{status:200,headers:{'Set-Cookie':`theme=${themeData};path=/;`}});
}

