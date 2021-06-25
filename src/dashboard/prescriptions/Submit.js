import React from "react";

function Submit() {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="submit-section">
          <button type="submit" class="btn btn-primary submit-btn">
            Save
          </button>
          <button type="reset" class="btn btn-secondary submit-btn">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Submit;
