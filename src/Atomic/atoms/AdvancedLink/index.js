import React from 'react';
import { Link } from "@mui/material";

export default function AdvancedLink({ value, href }) {
  return (
    <Link href={href} sx={{ "&: hover": { color: "common.black" } }}>
      {value}
    </Link>
  )
}
