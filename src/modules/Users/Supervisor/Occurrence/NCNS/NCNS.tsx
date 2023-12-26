import { useState } from "react";
import {
  I2cButton,
  I2cInput,
  I2cMenuItem,
  I2cSelect,
} from "@webcomponents/i2cwebcomponents/dist/react";

const NCNS = () => {
  const [id, setId] = useState("NCNS (No Call No Show)");
  const [endOcc, setEndOcc] = useState("0");

  const NcscformData = { id: "", endOcc: "" };

  const handleNCSCSubmit = (event: any) => {
    event.preventDefault();
    NcscformData.id = id;
    NcscformData.endOcc = endOcc;
    console.log(NcscformData);
    alert("submitted");
  };

  return (
    <div className="content">
      <div className="tab-header">
        <h3>NCNS/Unapproved Absence</h3>
        <p>
          The No call no show/unapproved absence policy for employees states
          that if he miss a scheduled shift without notice or rejected approvals
        </p>
      </div>

      <form onSubmit={handleNCSCSubmit}>
        <div className="id">
          <div className="row">
            <div className="ncns-field-1">
              <I2cSelect
                label="Occurence ID/Name"
                size="medium"
                className="occurrenc-select"
                value={id}
                onI2cChange={(event: any) => setId(event.target.value)}
              >
                <I2cMenuItem value="NCNS (No Call No Show)">
                  NCNS (No Call No Show)
                </I2cMenuItem>
                <I2cMenuItem value="Unapproved Absent">
                  Unapproved Absent
                </I2cMenuItem>
              </I2cSelect>
            </div>

            <div className="start-radio-occurence col-md-3 ncns-occ ">
              <span>pt</span>
              <I2cInput
                label="Occurrence"
                className="occurrenc-input"
                value={endOcc}
                onI2cChange={(event: any) => setEndOcc(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="occ-late-buttons ncns-buttons">
          <I2cButton>Cancel</I2cButton>
          <I2cButton type="submit" variant="primary">
            Save
          </I2cButton>
        </div>
      </form>
    </div>
  );
};

export default NCNS;
