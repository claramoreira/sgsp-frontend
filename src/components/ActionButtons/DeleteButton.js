import { CustomDialog, useDialog } from 'react-st-modal';

const DeleteDialogContent = (props) => {
    const dialog = useDialog();
    const newUs = { ...props.us, status: 0 };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.nativeEvent.submitter.id === "submit-button") {
            props.deleteFunction(newUs);
        }
    };

    return (
        <div className="container-fluid">
            <form className="m-2" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <div className="my-4">
                        Deseja deletar a Unidade de Saúde: <b>{props.us.nome}</b>?
                    </div>

                    <button className="btn mb-2 btn-danger col-4" id="submit-button"
                        onClick={() => {
                            // Сlose the dialog and return the value
                            dialog.close();
                        }}
                    >
                        Confirmar
                    </button>
                    <button className="btn mb-2 btn-secundary offset-md-4 col-4" id="cancel-button"
                        onClick={() => {
                            dialog.close();
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div >
    );
};


const DeleteButton = (props) => {
    return (
        <svg
            onClick={async () => {
                await CustomDialog(<DeleteDialogContent us={props.us} deleteFunction={props.deleteFunction} />, {
                    title: props.us.nome
                });
            }}
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-trash mr-2" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>);
};

export default DeleteButton;