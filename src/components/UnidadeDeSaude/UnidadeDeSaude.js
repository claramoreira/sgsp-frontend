import DeleteButton from '../ActionButtons/DeleteButton';
import EditButton from '../ActionButtons/EditButton';
import DetailButton from '../ActionButtons/DetailButton';

const UnidadeDeSaude = ({ us }) => {
    return (
        <>
            <tr>
                <th scope="row">{us.id_unidade_saude}</th>
                <td>{us.nome}</td>
                <td>{us.categoria}</td>
                <td>{us.tipo}</td>
                <td>{us.endereco}</td>
                <td>{us.telefone}</td>
                <td>
                    <DeleteButton us={us} />
                    <EditButton us={us} />
                    <DetailButton us={us} />
                </td>
            </tr>
        </>
    );
};

export default UnidadeDeSaude;