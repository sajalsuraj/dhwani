import List from "./list";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DashboardContent() {
  const [value, onChange] = useState<Value>(new Date());

  const selectedData = useRef<Date>(new Date());

  useEffect(() => {
    selectedData.current = new Date(value?.toString()!) ?? new Date();
  }, [value]);
  return (
    <div className="px-[104px]">
      <h2 className="heading2 mt-[52px] colorPictonBlue">Hello, Username</h2>

      <div className="flex mt-[50px]">
        <div className="basis-3/5">
          <div className="w-full">
            <div className="px-[120px] flex justify-between text-[#5F5F5F]">
              <span>Name</span>
              <span>Dhwani Progress</span>
              <span>Upcoming Sessions</span>
            </div>

            <List />
          </div>
        </div>

        <div className="basis-2/5 flex item-center justify-center">
          <div className="flex justify-center items-center">
            <div className="flex flex-col">
              <div className="text-center text-base text-[#5F5F5F] font-medium mb-[10px]">
                {format(selectedData.current, "d MMMM, yyyy")}
              </div>
              <div>
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
