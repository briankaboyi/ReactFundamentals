import { useState } from "react";


export default function useHandleChange() {
  const [content, setContent] = useState("");

  function handleChange(e) {
    setContent(e.target.value);
  }
  return { content, handleChange };
}
