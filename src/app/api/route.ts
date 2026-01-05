import { getCountries } from "@/services/countryService";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    const countries = await getCountries(search || undefined);
    return NextResponse.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);

    // Handle specific error cases
    if (
      error instanceof Error &&
      error.message.includes("Failed to fetch countries")
    ) {
      const statusMatch = error.message.match(/\d+/);
      const status = statusMatch ? parseInt(statusMatch[0]) : 500;
      return NextResponse.json(
        { error: "Failed to fetch countries", status },
        { status }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
