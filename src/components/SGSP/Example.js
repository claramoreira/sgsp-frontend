import { Alert } from 'react-st-modal';

const AlertExample = (props) => {
    return (
        <div>
            <button
                onClick={async () => {
                    await Alert(props.descricao, props.nome);
                }}
            >
                Alert
      </button>
        </div>
    );
}

export default AlertExample;