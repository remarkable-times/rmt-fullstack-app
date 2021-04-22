import React, { useState, useEffect } from "react";
import SingleNewsletter from "./SingleNewsletter";
import {tempMock} from "./tempMock"; //dummie data

export default function Comp() {
  const [newsletterList, setNewsletterList] = useState([]);

  function getData() {
    const data = tempMock;
    setNewsletterList(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    
      <div className="grid grid-cols-3" value={newsletterList}>
        {tempMock.map((mock) => (
          <SingleNewsletter
            key={mock.id}
            id={mock.id}
            title={mock.title}
            caption={mock.caption}
            thumbImageUrl={mock.thumbImageUrl}
          />
        ))}
      </div>
            
  );
}