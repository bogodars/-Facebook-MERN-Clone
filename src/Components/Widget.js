import React from "react";

const Widget = () => {
  return (
    <div className="widgets">
      <iframe
        title="This is a unique title"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaras.steeler%2Fposts%2F2547623945337850&show_text=true&width=552&height=547&appId "
        width="340"
        height="1500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widget;
