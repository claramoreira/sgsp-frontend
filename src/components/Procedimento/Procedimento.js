const Procedimento = (props) => {
    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.nome}</td>
                <td>{props.tipo}</td>
            </tr>
        </>
    );
};

export default Procedimento;