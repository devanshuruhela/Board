import { NextResponse } from "next/server";
import ActivityData from './data.json'

export async function GET(req:any) {
  return NextResponse.json(ActivityData);
}
