import axios from "axios";
import React, { useEffect, useState } from "react";
import Note from "./Note";
import NoticeCard from "./NoticeCard";

interface notice {
  UserName: string;
  Note: string;
  date: string;
  map: any;
}

function Notice() {
  const [data, setData] = useState<notice>();
  const getQuestion = async () => {
    const res = await axios.get(`http://localhost:5000/api/note/`);

    setData(res.data.message);
  };
  useEffect(() => {
    getQuestion();
  }, []);
console.log('====================================');
console.log(data);
console.log('====================================');
  return (
    <div className="News Question">
      <div className="Questions">
        {data?.map?.((question: {UserName:any}) => (
          <NoticeCard UserName = {question.UserName} />
        ))}
        {/* <NoticeCard /> */}
      </div>
      <div className="Sidebar">
        <Note />
      </div>
    </div>
  );
}

export default Notice;
