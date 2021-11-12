import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalFooter, Button, Spinner } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import useModal from "../common/useModal";
import { renderTextField } from "../common/ReduxFields";
import { required } from "../constants/Validate";
import { useSelector } from "react-redux";
import { createPostsRequest, editPostsRequest } from "../redux/posts/actions";
const AddPostModal = (props) => {
  const history = useHistory();
  const { open, hide, handleSubmit, initialValues } = props;
  console.log(open);

  const dispatch = useDispatch();

  const nextProps = useSelector((state) => ({
    isLoading: state.posts && state.posts.isLoading,
  }));

  const onSubmit = (formProps) => {
    console.log("prop", props);
    console.log(formProps);

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

  return (
    <Modal isOpen={open} fade={false} toggle={hide}>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {initialValues ? (
            <ModalHeader toggle={hide}>Edit request</ModalHeader>
          ) : (
            <ModalHeader toggle={hide}>Add request</ModalHeader>
          )}

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
