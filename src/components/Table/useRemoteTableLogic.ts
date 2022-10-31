import { useCallback, useMemo, useState } from "react";
import { QueryConfig, QueryKey, useQuery } from "react-query";

import { APICall, Paginated, QueryParamsType } from "api/utils";
import { TablePaginationOptions, TableSortingOptions } from "components/Table";
import { TablePageLimitType } from "components/Table/components/TablePagination";

function useRemoteTableLogic<T extends Record<string, unknown>>(
  queryKey: QueryKey[] | readonly QueryKey[],
  queryFn: (
    queryParams?: QueryParamsType<T> | undefined
  ) => APICall<Paginated<T[]>>,
  filters?: QueryParamsType<T> | undefined,
  queryConfig?: QueryConfig<Paginated<T[]>>
) {
  const [sortBy, setSortBy] = useState<QueryParamsType["sort"]>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<TablePageLimitType>(20);

  const { data, status } = useQuery(
    [...queryKey, { sort: sortBy, page, limit, ...filters }],
    async () => {
      const res = await queryFn({
        sort: sortBy,
        page,
        limit,
        ...filters,
      });
      return res.data;
    },
    queryConfig
  );

  const sortOptions = useMemo<TableSortingOptions>(
    () => ({
      remote: {
        onSortChange: setSortBy,
      },
    }),
    [setSortBy]
  );

  const onPageChange = useCallback((currentPage: any, currentLimit: any) => {
    setPage(currentPage);
    setLimit(currentLimit);
  }, []);

  const paginationOptions = useMemo<TablePaginationOptions>(
    () => ({
      remote: {
        initialPageSize: limit,
        pageCount: data?.meta.pagination.totalPages,
        totalResults: data?.meta.pagination.totalResults,
        onPageChange,
      },
    }),
    [data?.meta.pagination, onPageChange, limit]
  );

  return {
    data: data?.data || [],
    meta: data?.meta,
    status,
    sortOptions,
    paginationOptions,
  };
}

export default useRemoteTableLogic;
