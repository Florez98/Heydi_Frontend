import React from "react";
import { Label } from "../../atoms";
import { Hours, Month } from "../../molecules";
import { TITLE_DAY, TITLE_HOUR } from "../../../constants/index";

export const Table = ({ days, currentDate }) => {
  return (
    <>
      <div className="tabla">
        <Label className="label__generic label__hour" text={TITLE_HOUR} />
        <Label className="label__generic label__day" text={TITLE_DAY} />
        <div className="main-table">
          <div>
            <Hours className="hours" />
          </div>
          <div>
            <Month
              className="month"
              days={days}
              month={currentDate.getMonth()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
