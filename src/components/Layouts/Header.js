/** @format */

import React from "react";
import Box from "@material-ui/core/Box";
import ReportButton from "../UIs/ReportButton";
import SettingButton from "../UIs/SettingButton";
import UserAvatar from "../UIs/UserAvatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Link from "@material-ui/core/Link";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      mt={3}
      pb={3}>
      <Link
        href='/'
        className=''
        underline='none'
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
        }}>
        <CheckCircleIcon style={{ marginRight: "5px" }} />
        Pomofocus
      </Link>
      <Stack direction='row' spacing={2}>
        <ReportButton />
        <SettingButton />
        <UserAvatar />
      </Stack>
    </Box>
  );
}
