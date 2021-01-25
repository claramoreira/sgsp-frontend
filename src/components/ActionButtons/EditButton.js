import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import { TIPO, CATEGORIA } from './FormOptions';

const EditDialogContent = (props) => {
    const dialog = useDialog();
    const [newNome, setNewNome] = useState({ nome: '' + props.us.nome });
    const [newCategoria, setNewCategoria] = useState({ categoria: '' + props.us.categoria });
    const [newTipo, setNewTipo] = useState({ tipo: '' + props.us.tipo });
    const [newEndereco, setNewEndereco] = useState({ endereco: '' + props.us.endereco });
    const [newCEP, setNewCEP] = useState({ cep: '' + props.us.cep });
    const [newTelefone, setNewTelefone] = useState({ telefone: '' + props.us.telefone });
    const [newDescricao, setNewDescricao] = useState({ descricao: '' + props.us.descricao });
    const id = props.us.id_unidade_saude;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.nativeEvent.submitter.id === "submit-button") {
            const newUnity = {
                id_unidade_saude: id,
                nome: newNome.nome,
                categoria: newCategoria.categoria,
                tipo: newTipo.tipo,
                endereco: newEndereco.endereco,
                cep: newCEP.cep,
                telefone: newTelefone.telefone,
                descricao: newDescricao.descricao,
                status: 1
            }
            props.editFunction(newUnity);
            props.forceRerender(newUnity);
        }
    };

    return (
        <div className="container-fluid">
            <form className="m-2" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Nome:</label>
                    <input
                        value={newNome.nome}
                        type="text"
                        className="col-md-12"
                        placeholder="Ex.: Hospital Mater Dei"
                        onChange={(event) => setNewNome({ nome: event.target.value })}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <label>Categoria:</label>
                        <select selected value={newCategoria.categoria} className="custom-select d-block w-80" id="categoria"
                            onChange={(event) => setNewCategoria({ categoria: event.target.value })}
                        >
                            {CATEGORIA.map(
                                (categoria) =>
                                    <option value={categoria} key={categoria}>{categoria}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <label>Tipo:</label>
                        <select selected value={newTipo.tipo} className="custom-select d-block w-80" id="tipo"
                            onChange={(event) => setNewTipo({ tipo: event.target.value })}
                        >
                            {
                                TIPO.map(
                                    (tipo) =>
                                        <option key={tipo} value={tipo}>{tipo}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label>Endereço:</label>
                    <input
                        value={newEndereco.endereco}
                        type="text"
                        placeholder="Ex.: Av. do Contorno, 9530 - Barro Preto"
                        className="col-md-12"
                        onChange={(event) => setNewEndereco({ endereco: event.target.value })}
                    />
                </div>
                <div className="row">
                    <div className="col-sm-6 mb-3 form-group">
                        <label>CEP:</label>
                        <input
                            value={newCEP.cep}
                            type="text"
                            placeholder="350150-200"
                            onChange={(event) => setNewCEP({ cep: event.target.value })}
                        />
                    </div>
                    <div className="col-sm-6 mb-3 form-group">
                        <label>Telefone:</label>
                        <input
                            value={newTelefone.telefone}
                            type="text"
                            placeholder="(31) 3456-7891"
                            onChange={(event) => setNewTelefone({ telefone: event.target.value })}
                        />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <div className="form-group">
                        <label>Descrição:</label>
                        <textarea
                            value={newDescricao.descricao}
                            placeholder="Escreva uma breve descrição da unidade de saúde e suas especialidades"
                            className="form-control"
                            id="descricao" rows="3"
                            onChange={(event) => setNewDescricao({ descricao: event.target.value })}
                        ></textarea>
                    </div>
                </div>

                <button className="btn mb-2 btn-primary col-4" id="submit-button"
                    onClick={() => {
                        // Сlose the dialog and return the value
                        dialog.close();
                    }}
                >
                    Salvar
                    </button>
                <button className="btn mb-2 btn-secundary offset-md-4 col-4" id="cancel-button"
                    onClick={() => {
                        dialog.close();
                    }}
                >
                    Cancelar
                    </button>

            </form>
        </div >
    );
};

const EditButton = (props) => {
    return (
        <svg
            onClick={async () => {
                await CustomDialog(<EditDialogContent us={props.us} editFunction={props.editFunction} forceRerender={props.forceRerender} />, {
                    title: props.us.nome
                });
            }}
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-pencil-square mr-2" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    );
};

export default EditButton;