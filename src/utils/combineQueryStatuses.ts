import { QueryStatus } from "react-query";

export const combineQueryStatuses: (
  ...statuses: QueryStatus[]
) => QueryStatus = (...statuses) => {
  if (statuses.includes(QueryStatus.Error)) {
    return QueryStatus.Error;
  } else if (statuses.includes(QueryStatus.Loading)) {
    return QueryStatus.Loading;
  } else if (statuses.includes(QueryStatus.Idle)) {
    return QueryStatus.Idle;
  }

  return QueryStatus.Success;
};
