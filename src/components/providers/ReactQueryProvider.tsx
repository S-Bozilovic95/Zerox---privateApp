import { useSnackbar } from "notistack";
import React, { FC, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { ReactQueryConfig } from "react-query/types/core/types";

import { WithChildren } from "utils/types";
const ReactQueryProvider: FC<WithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleError = useCallback(
    (error: any) => {
      enqueueSnackbar(
        error?.data?.message || <FormattedMessage id="GLOBAL.ERROR_MESSAGE" />,
        {
          variant: "error",
          // action
        }
      );
    },
    [
      enqueueSnackbar,
      // action
    ]
  );

  const handleSuccess = useCallback(
    (response: any) => {
      enqueueSnackbar(
        response?.message || <FormattedMessage id="GLOBAL.SUCCESS_MESSAGE" />,
        {
          variant: "success",
          // action,
        }
      );
    },
    [enqueueSnackbar]
  );

  const overrides = useMemo<ReactQueryConfig<any, any>>(
    () => ({
      queries: {
        onError: handleError,
      },
      mutations: {
        onError: handleError,
        onSuccess: handleSuccess,
      },
    }),
    [handleError, handleSuccess]
  );

  return (
    <ReactQueryConfigProvider config={overrides}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </ReactQueryConfigProvider>
  );
};

export default ReactQueryProvider;
