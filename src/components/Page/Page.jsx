import React, { useEffect, useState } from "react";
import { apiService } from "../../api/apiServiceClass";
import Loader from "../UI/Loader/Loader";
import './Page.css';

const Page = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const clearErrorMessage = () => {
        setErrorMessage('');
        setShowError(false);
    };

    const getPage = async (page) => {
        clearErrorMessage();
        setLoading(true);
        try {
            const response = await apiService.getPage(page);
            setData(response);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        getPage(props.page);
    }, [props.page]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {showError ? <p className='loading-text error-text'>{errorMessage}</p> : null}
            {loading ?
                <Loader />
                :
                <div className="Page-container">
                    <h1 className="title">{data.title}</h1>
                    <p>{data.content}</p>
                </div>
            }
        </>
    );
};

export default Page;