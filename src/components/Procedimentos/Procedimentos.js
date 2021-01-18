import React from 'react';
import Procedimento from '../Procedimento/Procedimento';

const Procedimentos = () => {
    const procedimentos =
        [{
            "id": 1,
            "nome": "Exame de urina",
            "tipo": "Exame",
            "descricao": "Informações sobre urina"
        },
        {
            "id": 2,
            "nome": "Hemograma",
            "tipo": "Exame",
            "descricao": "Informações sobre sangue"
        },
        {
            "id": 3,
            "nome": "Retirada de pontos",
            "tipo": "Procedimento",
            "descricao": "Informações sobre retirada de pontos"

        }];
    return (
        <div class="p-4 container-fluid">
            <div class="row">
                <h2>Procedimentos</h2>
            </div>
            <div class="row">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {procedimentos.map(
                            (procedimento) =>
                                <Procedimento id={procedimento.id} nome={procedimento.nome} tipo={procedimento.tipo} />
                        )}
                    </tbody>
                </table>
            </div>
            <div class="row">
                <button class="btn btn-primary">
                    Adicionar
                </button>
            </div>
        </div>
    );
};

export default Procedimentos;