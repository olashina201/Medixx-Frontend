import React, { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function AddBlog() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapperRef.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill("#container", { theme: "snow" });
  }, []);
  return (
    <div id="#container"></div>
  );
}

export default AddBlog;
