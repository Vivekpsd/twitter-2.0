import { CreateForm } from "./create-form";
import "../styles/form.css";

export const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="container">
        <h1>Create Post 📫</h1>
      </div>
      <div className="create-form">
        <CreateForm />
      </div>
    </div>
  );
};
