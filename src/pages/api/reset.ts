import { NextApiRequest, NextApiResponse } from "next";
import { registrationsFilePath, saveRegistrations } from "./register";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "POST") {
    saveRegistrations(registrationsFilePath, []);

    return response.status(204).end();
  }
}