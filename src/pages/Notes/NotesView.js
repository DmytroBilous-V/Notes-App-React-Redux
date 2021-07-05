import React from 'react';
import { routes } from '../router';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import SummaryNotes from '../../components/SummaryNotes';


function Notes ({ list,
    handleInputChange,
    handleAddNote,
    value,
    select,
    categoryList,
    content,
    handleContentChange,
    handleCategoryChange }) {

    return (
        <div>
            <header>
                header
                <input
                    type="text" 
                    onChange={(e) => handleInputChange(e.target.value)}
                    value={value}
                />
                <input
                    type="text" 
                    onChange={(e) => handleContentChange(e.target.value)}
                    value={content}
                />
                <select name="category" value={select} onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="Task">
                        Task
                    </option>
                    <option value="Randon Thought">
                        Randon Thought
                    </option>
                    <option value="Idea">
                        Idea
                    </option>
                </select>
                <button
                    type="button"
                    onClick={handleAddNote}
                >
                    Add
                </button>
            </header>
            <footer>
                <Header
                    headerClass="summary_header"
                    titles={["Note Category", "Archived", "Active"]}
                />
                <SummaryNotes
                    list={list}
                    category={categoryList}
                />
                <Link to={routes.index}>Home</Link>
                <Link to={routes.active}>Active</Link>
                <Link to={routes.archived}>Archived</Link>
            </footer>
        </div>
    )
}

export default Notes;