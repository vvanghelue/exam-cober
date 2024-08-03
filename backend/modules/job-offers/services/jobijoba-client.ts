import querystring from "node:querystring";
import type { AdsResponse } from "../api/types";

const BASE_URL = "https://api.jobijoba.com";

async function getJobiJobaAuthToken() {
  const response = await fetch(`${BASE_URL}/v3/fr/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.JOBIJOBA_API_CLIENT_ID,
      client_secret: process.env.JOBIJOBA_API_CLIENT_SECRET,
    }),
  });
  const { token } = await response.json();
  return token;
}

export async function getJobList(
  what: string,
  where: string,
  limit: number = 10,
  page: number | string = 1
): Promise<AdsResponse> {
  const token = await getJobiJobaAuthToken();

  const query = querystring.encode({
    what,
    where,
    where_type: "city",
    perimeter: "99",
    page,
    limit,
  });
  const response = await fetch(`${BASE_URL}/v3/fr/ads/search?${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}
