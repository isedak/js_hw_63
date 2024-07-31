import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../api/apiServiceClass";
import './AdminPage.css';

const AdminPage = () => {
    const [pages, setPages] = useState({});
    const [pageName, setPageName] = useState('about');
    const [editingPage, setEditingPage] = useState({
        title: '',
        content: ''
    });
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const clearErrorMessage = () => {
        setErrorMessage('');
        setShowError(false);
    };

    const getPages = async () => {
        clearErrorMessage();
        try {
            const response = await apiService.getPages();
            setPages(response);
            setEditingPage(response[pageName]);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    const selectOnChanged = (e) => {
        const page = e.target.value;
        setPageName(page);
        setEditingPage(pages[page]);

    };

    const onInputChanged = (e) => {
        const { name, value } = e.target;
        setEditingPage(prevState => {
            return { ...prevState, [name]: value }
        });
    };

    useEffect(() => {
        getPages();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const editPage = async (e) => {
        e.preventDefault();
        clearErrorMessage();
        try {
            await apiService.editPage(pageName, editingPage);
            navigate(`/${pageName}`);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    return (
        <div className="AdminPage-container">
            <div className='admin-form-column'>
                <label className="label" htmlFor="pageName">Select page:</label>
                <select name="pageName" id="pageName"
                    className="select"
                    onChange={(e) => selectOnChanged(e)}>
                    {Object.keys(pages).map((key, i) => {
                        return <option key={`${i}`} value={key}>
                            {key === "pagefour" ?
                                "page four" : key === "pagefive" ?
                                    "page five" : key}
                        </option>
                    })}
                </select>
                <form className="flex-column" onSubmit={(e) => editPage(e)}>
                    <label className="label" htmlFor="title">Title:</label>
                    <input type="text" id="title"
                        className={'input-box'}
                        onChange={(e) => onInputChanged(e)}
                        name={"title"}
                        value={editingPage.title}
                    />
                    <label className="label" htmlFor="content">Content:</label>
                    <textarea id="content"
                        className={'textarea'}
                        value={editingPage.content}
                        onChange={(e) => onInputChanged(e)}
                        name={"content"}
                    />
                    <button className="btn"
                        disabled={editingPage.title.trim() === '' ||
                            editingPage.content.trim() === '' ? true : false}>
                        Save</button>
                </form>
                {showError ? <p className='admin-error-text'>{errorMessage}</p> : null}
            </div>
        </div>
    );
};

export default AdminPage;