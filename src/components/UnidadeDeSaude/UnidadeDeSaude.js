import DeleteButton from '../ActionButtons/DeleteButton';
import EditButton from '../ActionButtons/EditButton';
import DetailButton from '../ActionButtons/DetailButton';

const UnidadeDeSaude = (props) => {
    return (
        <>
            <tr>
                <th scope="row">{props.us.id_unidade_saude}</th>
                <td>{props.us.nome}</td>
                <td>{props.us.categoria}</td>
                <td>{props.us.tipo}</td>
                <td>{props.us.endereco}</td>
                <td>{props.us.cep}</td>
                <td>{props.us.telefone}</td>
                <td>
                    <DeleteButton us={props.us} deleteFunction={props.deleteFunction} />
                    <EditButton us={props.us} editFunction={props.editFunction} />
                    <DetailButton us={props.us} />
                </td>
            </tr>
        </>
    );
};

export default UnidadeDeSaude;