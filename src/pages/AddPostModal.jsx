import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalFooter, Button, Spinner } from "reactstrap";
import { Field, reduxForm } from "redux-form";

import { renderTextField } from "../common/ReduxFields";
import { required } from "../constants/Validate";

import { createPostsRequest } from "../redux/posts/actions";
const AddPostModal = (props) => {
  const history = useHistory();
  const { open, hide, handleSubmit, initialValues } = props;
  console.log(open);

  const dispatch = useDispatch();

  /*----------on form submit -----------*/
  const onSubmit = (formProps) => {
    const formData = {
      title: formProps.title,
      body: formProps.body,
    };
    if (!initialValues) {
      dispatch(createPostsRequest(formData));
    } else {
      history.push("/");
    }
  };

/*-----------to handle response from api's-----------------*/
  const nextProps = useSelector((state) => ({
    isLoading: state.posts && state.posts.isLoading,
  }));
  
  return (
    <Modal isOpen={open} fade={false} toggle={hide}>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader toggle={hide}>
            {initialValues ? "Edit request" : "Add request"}
          </ModalHeader>

          <Field
            name="title"
            label="Title"
            component={renderTextField}
            validate={required}
          />
          <Field
            name="body"
            label="body"
            component={renderTextField}
            validate={required}
          />

          <ModalFooter>
            <Button color="success" type="submit">
              submit
              {nextProps.isLoading ? <Spinner size="sm" /> : ""}
            </Button>
          </ModalFooter>
        </form>
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: "AddPostModal",
})(AddPostModal);
