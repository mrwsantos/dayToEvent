import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "POST") {
    return response.status(204).json({
      ok: 'kkkk'
    });
  }
}