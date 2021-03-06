/* eslint-disable import/no-webpack-loader-syntax */
import React, { FC, useState } from "react";
import Sandbox from "../../react-sandbox";
import defs from "!raw-loader!./defs.lsz";
import implement from "!raw-loader!./implements.lsz";
import code from "!raw-loader!./code.lsz";
export interface LeetCodeProps {}
const LeetCode: FC<LeetCodeProps> = ({ ...props }) => {
  return (
    <>
      <Sandbox
        pageDefaultSize={0}
        code={code}
        defs={defs}
        preExecute={implement}
      />
    </>
  );
};
export default LeetCode;
