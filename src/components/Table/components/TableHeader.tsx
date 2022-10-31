import { Stack, SvgIconTypeMap, Typography, alpha } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { ReactNode } from "react";

import { WithChildren } from "utils/types";

interface DefaultTableHeaderProps {
  label: string | ReactNode;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const TableHeader = ({
  label,
  children,
  icon: Icon,
}: WithChildren<DefaultTableHeaderProps>) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        py: { xs: 1.5, sm: 2 },
        px: 2,
        backgroundColor: (t) => alpha(t.palette.primary.main, 0.3),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ py: { xs: 1, sm: 0.5 } }}
      >
        <Icon sx={{ mr: 1 }} />
        <Typography variant="h5">{label}</Typography>
      </Stack>

      {children}
    </Stack>
  );
};

export default TableHeader;
