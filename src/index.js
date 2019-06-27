import React from 'react'
import './index.css';
import ReactDOM from 'react-dom'
import Table from './components/Table'

ReactDOM.render(
    <Table robotPosition={[4, 0]} />,
    document.getElementById('root'),
)