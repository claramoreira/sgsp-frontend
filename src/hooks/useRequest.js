import React, { useReducer, useEffect } from 'react';
import requestReducer, { REQUEST_STATUS } from '../reducers/request';
import axios from 'axios';
import {
    GET_ALL_FAILURE,
    GET_ALL_SUCCESS,
    POST_FAILURE,
    POST_SUCCESS,
    PUT_FAILURE,
    PUT_SUCCESS,
} from '../actions/request';

const useRequest = (baseUrl, routeName) => {
    const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
        status: REQUEST_STATUS.LOADING,
        records: [],
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${routeName}`);
                dispatch({
                    type: GET_ALL_SUCCESS,
                    records: response.data,
                });
            } catch (e) {
                console.log('Loading data error', e);
                dispatch({
                    type: GET_ALL_FAILURE,
                    error: e,
                });
            }
        };
        fetchData();
    }, [baseUrl, routeName, records]);

    const propsLocal = {
        records,
        status,
        error,
        post: React.useCallback(async (record) => {
            try {
                const response = await axios.post(`${baseUrl}/${routeName}`, record);
                dispatch({
                    type: POST_SUCCESS,
                    record: response.data,
                });

            } catch (e) {
                dispatch({
                    type: POST_FAILURE,
                    error: e,
                });
            }
        }, [baseUrl, routeName]),
        put: React.useCallback(async (record) => {
            try {
                await axios.put(`${baseUrl}/${routeName}/${record.id_unidade_saude}`, record);
                dispatch({
                    type: PUT_SUCCESS,
                    record: record,
                });
            } catch (e) {
                dispatch({
                    type: PUT_FAILURE,
                    error: e,
                });
            }
        }, [baseUrl, routeName]),
        inactive: React.useCallback(async (record) => {
            try {
                console.log(record);
                await axios.put(`${baseUrl}/${routeName}/${record.id_unidade_saude}`, record);
                dispatch({
                    type: PUT_SUCCESS,
                    record: record,
                });
            } catch (e) {
                dispatch({
                    type: PUT_FAILURE,
                    error: e,
                });
            }
        }, [baseUrl, routeName]),
    };
    return propsLocal;
};

export default useRequest;