import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <div class="ui-table-loading">
      <div class="ui-table-loading-content">
        <svg width="24px" height="15px">
          <polyline id="back" points="0 8 6 8 9 0 14 15 18 8 24 8"></polyline>
          <polyline id="front" points="0 8 6 8 9 0 14 15 18 8 24 8"></polyline>
        </svg>
        <div class="tR">Your Wait is Worth It</div>
      </div>
    </div>
  );
};

export default Loading;
