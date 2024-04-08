import React from "react";
import { Form } from "react-router-dom";

const CreateFile = () => {
  return (
    <div>
      <Form method="post">
        <div className="form">
          <h2>Create Your Post Here</h2>
  
    {/* form  */}

          <div>
            <label htmlFor="form-tile">Title</label>
            <input
              type="text"
              id="form-title"
              name="title"
              placeholder="Enter your Title"
            />
          </div>

          <div>
            <label htmlFor="form-image">Image Url</label>
            <input
              type="url"
              id="form-image"
              name="image"
              placeholder="Enter your Image Url"
            />
          </div>

          <div>
            <label htmlFor="form-date">Date</label>
            <input type="date" id="form-date" name="date" />
          </div>

          <div>
            <label htmlFor="form-description">Description</label>
            <textarea
              rows={6}
              id="form-description"
              name="description"
              placeholder="Enter Your Description"
            />
          </div>

          <button className="Btn">Post</button>

    {/* form  */}
        </div>
      </Form>
    
    </div>
  );
};

export default CreateFile;
