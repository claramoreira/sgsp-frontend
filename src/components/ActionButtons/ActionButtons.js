import React, { useState } from 'react';
import { CustomDialog, useDialog, Alert } from 'react-st-modal';
import { TIPO, CATEGORIA } from './FormOptions';


const DeleteButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-trash mr-2" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>);
};

const DetailButton = ({ us }) => {
    return (
        <svg onClick={async () => {
            await Alert(us.descricao, us.nome);
        }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-search mr-2" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
    );
};

const EditDialogContent = ({ us }) => {
    const dialog = useDialog();
    const [value, setValue] = useState();
    return (
        <div className="container-fluid">
            <form className="needs-validation m-2">
                <div className="form-group mb-3">
                    <label>Nome:</label>
                    <input
                        type="text"
                        className="col-md-12"
                        value={us.nome}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <label>Categoria:</label>
                        <select className="custom-select d-block w-80" id="categoria">
                            <option value="">{us.categoria}</option>
                            {CATEGORIA.filter((val) => (val !== us.categoria)).map(
                                (categoria) =>
                                    <option>{categoria}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <label>Tipo:</label>
                        <select className="custom-select d-block w-80" id="tipo">
                            <option value="">{us.tipo}</option>
                            {TIPO.filter((val) => (val !== us.tipo)).map(
                                (tipo) =>
                                    <option>{tipo}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label>Endereço:</label>
                    <input
                        type="text"
                        className="col-md-12"
                        value={us.endereco}
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
                            value={us.CEP}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    </div>
                    <div className="col-sm-6 mb-3 form-group">
                        <label>Telefone:</label>
                        <input
                            type="text"
                            value={us.telefone}
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
                            value={us.descricao}
                            className="form-control"
                            id="descricao" rows="3"></textarea>
                    </div>
                </div>

                <button type="submit" className="btn mb-2 btn-primary col-4"
                    onClick={() => {
                        // Сlose the dialog and return the value
                        dialog.close(value);
                    }}
                >
                    Salvar
                    </button>
                <button type="submit" className="btn mb-2 btn-secundary offset-md-4 col-4"
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

const EditButton = ({ us }) => {
    return (
        <svg
            onClick={async () => {
                await CustomDialog(<EditDialogContent us={us} />, {
                    title: us.nome
                });
            }}
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-pencil-square mr-2" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
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

export { DeleteButton, DetailButton, EditButton, AddButton };