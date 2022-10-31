import React, { FC } from "react";

import { WithChildren } from "utils/types";

const DefaultLayout: FC<WithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default DefaultLayout;
