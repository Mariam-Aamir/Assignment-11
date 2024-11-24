import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://your-new-api-url.com/endpoint";

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_URL);

    if (!response.ok){
      return NextResponse.json(
        { success: false, message: "Failed Fetch the Data from the API" },
        { status: response.status }
      )
    }
    const data = await response.json()

    return NextResponse.json({success: true,data})
  } catch (error:any) {
    return NextResponse.json({ 
              
        success: false, message:"get the error",
        error: error.message
    })
  }
}
