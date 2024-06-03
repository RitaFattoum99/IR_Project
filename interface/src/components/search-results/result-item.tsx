import React, { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const ResultItem = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="result-item">
      <LinesEllipsis
        text={text}
        maxLine={expanded ? Infinity : 3}
        // @ts-expect-error fix this
        ellipsis={
          <>
            ...
            <p className="readmore" onClick={() => setExpanded(true)}>
              Read More
            </p>
          </>
        }
        trimRight
        basedOn="letters"
      />
      {expanded && (
        <p className="collapse" onClick={() => setExpanded(false)}>
          Collapse
        </p>
      )}
    </div>
  );
};

export default ResultItem;
