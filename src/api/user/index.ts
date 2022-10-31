import request, { APICall } from "../request";
import { CurrentUserType } from "./types";

export const getCurrentUser = (): APICall<{ data: CurrentUserType }> =>
  request({
    url: `/auth/me`,
    method: "GET",
  });
