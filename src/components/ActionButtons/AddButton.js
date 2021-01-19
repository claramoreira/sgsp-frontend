import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import { TIPO, CATEGORIA } from './FormOptions';

const AddDialogContent = (props) => {

    const dialog = useDialog();
    const [value, setValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUs = {
            "id": 5,
            "nome": "Hospital Belo Horizonte",
            "categoria": "Público",
            "tipo": "Hospital",
            "endereco": "Av. Pres. Antônio Carlos, 1694 - Cachoeirinha",
            "CEP": "10200-200",
            "telefone": "(31) 1234-5678",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };
        props.addNewUs(5, newUs);
    };

    return (
        <div className="container-fluid">
            <form className="needs-validation m-2" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Nome:</label>
                    <input
                        type="text"
                        className="col-md-12"
                        placeholder="Ex.: Hospital Mater Dei"
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <label>Categoria:</label>
                        <select defaultValue="Selecione a categoria" className="custom-select d-block w-80" id="categoria">
                            <option value="Selecione a categoria" disabled>Selecione a categoria</option>
                            {CATEGORIA.map(
                                (categoria) =>
                                    <option value={categoria}>{categoria}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <label>Tipo:</label>
                        <select defaultValue="Selecione o tipo" className="custom-select d-block w-80" id="tipo">
                            <option value="Selecione o tipo" disabled>Selecione o tipo</option>
                            {TIPO.map(
                                (tipo) =>
                                    <option value={tipo}>{tipo}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label>Endereço:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Av. do Contorno, 9530 - Barro Preto"
                        className="col-md-12"
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                </div>
                <div className="row">
                    <div className="col-sm-6 mb-3 form-group">
                        <label>CEP:</label>
                        <input
                            type="text"
                            placeholder="350150-200"
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    </div>
                    <div className="col-sm-6 mb-3 form-group">
                        <label>Telefone:</label>
                        <input
                            type="text"
                            placeholder="(31) 3456-7891"
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <div className="form-group">
                        <label>Descrição:</label>
                        <textarea
                            placeholder="Escreva uma breve descrição da unidade de saúde e suas especialidades"
                            className="form-control"
                            id="descricao" rows="3"></textarea>
                    </div>
                </div>

                <button className="btn mb-2 btn-primary col-4"
                    onClick={() => {
                        // Сlose the dialog and return the value
                        dialog.close(value);
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