import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from "next-auth"
import { options } from "../../../options" 

export async function GET(req: NextRequest) {
  let session = await getServerSession(options)

  const segments = req.url.split('/')
  const pathname = segments[segments.length - 1]
  if (session) {
    // @ts-ignore
    if (session.token.sub == pathname) return NextResponse.json(session?.token.accessToken)
    else return NextResponse.json({"content": "You are not authorized to view this content"}, { status: 401})
  }
  return NextResponse.json({"content": "NULL"})
}