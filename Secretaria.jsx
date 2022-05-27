import React, { useState } from 'react';
import Cadastro from './Cadastro';
import NavMenu from '../components/NavMenu';
import { Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function Secretaria() {
    return (
        <>
            <NavMenu />
            <Container className="d-flex justify-content align-items-top  w-full vh-100">
            <div  >
                <h1 className="">Amanda</h1>
            </div>
            </Container>
        </>
    );
}

