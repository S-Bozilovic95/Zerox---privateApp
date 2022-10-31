import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { FormattedMessage } from "react-intl";

import { WithChildren } from "utils/types";

export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      bgcolor="rgba(201, 168, 85, 0.14);"
      height="100vh"
      p={2}
    >
      <Typography
        mt={4}
        mb={3}
        variant="h1"
        className="text-3xl font-bold mb-6"
        fontWeight={700}
        textAlign="center"
      >
        <FormattedMessage id="ERROR_BOUNDARY.HEADER" />
      </Typography>

      <Typography fontSize={20}>
        <FormattedMessage id="ERROR_BOUNDARY.SUBHEADER1" />
      </Typography>
    </Stack>
  );
};

const GlobalErrorBoundary: FC<WithChildren> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        // we could send some error data to external system like DataDog etc. here
        console.error({ error, info });
      }}
      onReset={() => (window.location.pathname = "/dashboard")}
    >
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
