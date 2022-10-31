export type LoginType = {
  token: string;
};

export type CurrentUserType = {
  role: "admin" | "user";
  permissions: string[];
};

export type UserOrgTypeRoleType = `${CurrentUserType["role"]}`;
