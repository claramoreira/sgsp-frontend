import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import { TIPO, CATEGORIA } from './FormOptions';

const AddDialogContent = (props) => {

    const dialog = useDialog();
    const [newNome, setNewNome] = useState({ nome: '' });
    const [newCategoria, setNewCategoria] = useState({ categoria: 'Selecione a categoria' });
    const [newTipo, setNewTipo] = useState({ tipo: 'Selecione o tipo' });
    const [newEndereco, setNewEndereco] = useState({ endereco: '' });
    const [newCEP, setNewCEP] = useState({ CEP: '' });
    const [newTelefone, setNewTelefone] = useState({ telefone: '' });
    const [newDescricao, setNewDescricao] = useState({ descricao: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUnity = {
            nome: newNome.nome,
            categoria: newCategoria.categoria,
            tipo: newTipo.tipo,
            endereco: newEndereco.endereco,
            CEP: newCEP.CEP,
            telefone: newTelefone.telefone,
            descricao: newDescricao.descricao
        }
        props.addNewUs(newUnity);
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
                            <option defaultValue="" disabled hidden>Selecione a categoria</option>
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
                            <option defaultValue="" disabled hidden>Selecione o tipo</option>
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
                            value={newCEP.CEP}
                            type="text"
                            placeholder="350150-200"
                            onChange={(event) => setNewCEP({ CEP: event.target.value })}
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

                <button className="btn mb-2 btn-primary col-4"
                    onClick={() => {
                        // Сlose the dialog and return the value
                        dialog.close();
                    }}
                >
                    Salvar
                    </button>
                <button className="btn mb-2 btn-secundary offset-md-4 col-4"
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

const AddButton = (props) => {
    return (
        <div className="row">
            <button onClick={async () => {
                await CustomDialog(<AddDialogContent addNewUs={props.addNewUs} />, {
                    title: "Nova unidade de saúde"
                });
            }} className="btn btn-primary">
                Adicionar
        </button>
        </div >
    );
};

export default AddButton;