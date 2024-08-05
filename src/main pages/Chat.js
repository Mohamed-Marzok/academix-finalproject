import React, { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    // Initialize Tawk.to
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/668a909be1e4f70f24ee6ae8/1i26k9o5u";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null; // This component does not render any UI
};

export default Chat;
