import React, { useState } from 'react';
import { AddButton } from '../ActionButtons/ActionButtons';
import UnidadeDeSaude from '../UnidadeDeSaude/UnidadeDeSaude';

const UnidadesDeSaude = () => {
    const usStatic =
        [{
            "id": 1,
            "nome": "Hospital Belo Horizonte",
            "categoria": "Público",
            "tipo": "Hospital",
            "endereco": "Av. Pres. Antônio Carlos, 1694 - Cachoeirinha",
            "CEP": "10200-200",
            "telefone": "(31) 1234-5678",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 2,
            "nome": "Hospital Felício Rocho",
            "categoria": "Particular",
            "tipo": "Hospital",
            "endereco": " Av. do Contorno, 9530 - Barro Preto",
            "CEP": "10200-200",
            "telefone": "(31) 1234-5678",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 3,
            "nome": "Hospital Paulo de Tarso",
            "categoria": "Público",
            "tipo": "Hospital",
            "endereco": "R. Estoril, 207 - São Francisco",
            "CEP": "10200-200",
            "telefone": "(31) 1234-5678",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 4,
            "nome": "Laboratório Hermes Pardini",
            "categoria": "Particular",
            "tipo": "Laboratório",
            "endereco": "R. Estoril, 207 - São Francisco",
            "CEP": "10200-200",
            "telefone": "(31) 1234-5678",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }];


    const [us, setUs] = useState(usStatic);

    const handleChange = (index, value) => {
        const newUs = [...us];
        newUs[index] = value;
        setUs(newUs);
    }

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
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                        {console.log(us[0])}
                    </thead>
                    <tbody>
                        {us.map(
                            (us) =>
                                <UnidadeDeSaude key={us.id} us={us} />
                        )}
                    </tbody>
                </table>
            </div>
            <AddButton addNewUs={handleChange} />
        </div>
    );
};

export default UnidadesDeSaude;