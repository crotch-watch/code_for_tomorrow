/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";

export function Post({ title, body }) {
  return (
    <Paper>
      <div style={{backgroundColor: "cyan"}}>{title}</div>
      <div style={{background: "yellow"}}>{body}</div>
      <div>{new Date().toDateString()}</div>
    </Paper>
  );
}
