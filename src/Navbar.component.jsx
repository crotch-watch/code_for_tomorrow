import { Button } from "@mui/material";
import "./Navbar.component.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="sidebar-container">
          <div className="side-card" style={{ backgroundColor: "grey" }}>
            <div className="avatar-small-container">
              <img
                className="avatar-small"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34fSgKbjoTkCe0np_ByAESZL4czJy_ptRtQ&s"
              />
            </div>

            <div className="intro-content">
              <p>Hi Reader</p>
              <p>Here's your News!</p>
            </div>
          </div>
          <div
            className="side-card toggl-head"
            style={{ backgroundColor: "grey" }}
          >
            <p>View Toggle</p>
            <div className="toggle-img-container"></div>
          </div>

          <div
            className="side-card feedback"
            style={{
              backgroundColor: "#f1f1f1",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.25rem" }}>Have a Feedback?</h2>
            <Button
              color="lightgreen"
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                backgroundColor: "lightgreen",
              }}
            >
              Wer'e Listening
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
