import { NextResponse } from "next/server";
import ProductData from "./data.json";

export async function GET(req:any) {
  return NextResponse.json(ProductData);
}
