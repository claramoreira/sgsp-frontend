import React, { useContext, useState } from 'react';
import { DataContext, DataProvider } from '../../contexts/DataContext';

import AddButton from '../ActionButtons/AddButton';
import UnidadeDeSaude from '../UnidadeDeSaude/UnidadeDeSaude';
// import { REQUEST_STATUS } from '../../reducers/request';
import { baseUrl } from '../../info/ServerInfo';


const UnidadesDeSaudeComponent = () => {
    const { records: us, post, put, inactive } = useContext(DataContext);
    console.log(us);
    // const [searchQuery, setSearchQuery] = useState('');
    // const success = status === REQUEST_STATUS.SUCCESS;
    // const isLoading = status === REQUEST_STATUS.LOADING;
    // const hasErrored = status === REQUEST_STATUS.ERROR;

    return (
        <div className="p-4 container-fluid">
            <div className="row">
                <h2>Unidades de Saúde</h2>

            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">CEP</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            us.map(
                                (us) =>
                                    <UnidadeDeSaude key={us.id_unidade_saude} us={us} editFunction={put} deleteFunction={inactive} />
                            )}
                    </tbody>
                </table>
            </div>
            <AddButton addNewUs={post} />
        </div>
    );
};

const UnidadesDeSaude = (props) => {
    return (
        <DataProvider baseUrl={baseUrl} routeName="unidadesaude">
            <UnidadesDeSaudeComponent {...props}></UnidadesDeSaudeComponent>
        </DataProvider>
    );
};

export default UnidadesDeSaude;