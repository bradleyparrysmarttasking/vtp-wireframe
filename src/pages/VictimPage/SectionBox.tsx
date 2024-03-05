import { GridCol, GridRow } from "govuk-react";

export default function SectionBox({ title, controls, children }: any) {
  return (
    <div
      style={{
        backgroundColor: "#f3f2f1",
        padding: "1em",
        marginBottom: "1em",
        borderRadius: 5,
        border: "1px solid #a1acb2",
      }}
    >
      <GridRow>
        <GridCol setWidth="one-half">{title}</GridCol>
        <GridCol
          setWidth="one-half"
          style={{ display: "flex", justifyContent: "end" }}
        >
          {controls}
        </GridCol>
      </GridRow>
      {children && <div className="frame">{children}</div>}
    </div>
  );
}
