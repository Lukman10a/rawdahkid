import { NextResponse } from "next/server";

const API_ORIGIN =
  process.env.API_SERVER_BASE_URL || "https://rawdoh.pxxl.click/api";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const upstreamResponse = await fetch(`${API_ORIGIN}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const contentType = upstreamResponse.headers.get("content-type") || "application/json";
    const responseBody = await upstreamResponse.text();

    return new NextResponse(responseBody, {
      status: upstreamResponse.status,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to reach registration service" },
      { status: 502 },
    );
  }
}
