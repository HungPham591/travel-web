import React from 'react';
import { Link } from "@mui/material";

export default function AdvancedLink({ value, href }) {
  return (
    <Link fontWeight="600" href={href} sx={{ textDecoration: "none", cursor: "pointer", "&: hover": { color: "black" } }}>
      {value}
    </Link>
  )
}
