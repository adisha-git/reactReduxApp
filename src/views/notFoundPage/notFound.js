import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

/* Component */
const Error404 = () => (
  <Typography>
    <div>Oops, did you click on the wrong link?</div>
    <div>
      <Link  href="/">
        Go back to Home
      </Link>
    </div>
  </Typography>
);

export default Error404;