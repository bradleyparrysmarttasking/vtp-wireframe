import { Button, H2, WarningText } from "govuk-react";
import "./WarningModal.css";
import { useState } from "react";

export default function WarningModal() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <WarningText>Disclaimer</WarningText>
          <ul className="list">
            <li>
              This is a proof of concept and not all fields and functions
              identified during the discovery process have been incorporated
              here; however, we are confident that this representation offers
              insight into the potential structure of a future state.
            </li>
            <li>
              All data is randomly generated and not connected to a database.
            </li>
            <li>
              Data sources can be toggled using the button in the top right.
            </li>
          </ul>
        </div>
        <div className="button-box">
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </div>
    </div>
  );
}
