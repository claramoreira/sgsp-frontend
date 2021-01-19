import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import { TIPO, CATEGORIA } from './FormOptions';

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

export default EditButton;