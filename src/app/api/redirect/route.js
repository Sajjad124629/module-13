import { NextResponse } from 'next/server'

export async function GET(request, response) {
    return NextResponse.redirect(new URL('/about', request.url))
   }

// export async function POST(request, response) {
//     return NextResponse.json({msg:'Hello Post'});
// }


