import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavMenu from "../components/NavMenu";
import axios from 'axios';
import Alunos from '../components/Alunos';


export default function Cadastro() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    /* lida com o submit e apresenta todos os valores do Form */
    const handleClickButton = () => {
        /* console.log(values); */
        axios.post("http://localhost:3001/register",{
            nome: values.nome,
            nascimento: values.nascimento,
            nacionalidade: values.nacionalidade,
        }).then((response)=>{
            console.log(response);
        }) 
    };

    useEffect(() =>{
        axios.get("http://localhost:3001/getAlunos").then((response) =>{
        console.log(response);
        });
    });

    return (
        <>
            <NavMenu />
            <div className="d-flex justify-content-center align-items-center vh-100 w-full">
                <Form className='d-flex flex-column border border-2 border-success p-2 rounded'>
                    <Form.Group className="d-flex mb-3 p-2">
                        <div className="w-100">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="name" name="nome"
                                placeholder="" className="register--input" /* < =registra o que foi colocado no input */
                                onChange={handleChangeValues} /> {/* <= lida com as trocas de valores nos input's */}
                        </div>
                        <div className="mx-1"></div>

                        <div className="w-50">
                            <Form.Label>Nascimento</Form.Label>
                            <Form.Control type="date" name="nascimento"
                                placeholder="" className="register--input"
                                onChange={handleChangeValues}></Form.Control>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 p-2">
                        <div className="w-50">
                            <Form.Label>Nacionalidade</Form.Label>
                            <Form.Select type="name" name="nacionalidade"
        placeholder='' className='register--input'
        onChange={handleChangeValues}>

        <option>Portuguesa</option>,
        <option>Filipina</option>,
        <option>Sul-Africano</option>,
        <option>Zimbabweano</option>,
        <option>Namibiana</option>,
        <option>Boliviano</option>,
        <option>Brasileiro</option>,
        <option>Chileno</option>,
        <option>Colombiano</option>,
        <option>Costarriquenho</option>,
        <option>Cubano</option>,
        <option>Dominicano</option>,
        <option>Equatoriano</option>,
        <option>Salvadorenho</option>,
        <option>Granadino</option>,
        <option>Guatemalteco</option>,
        <option>Guianês</option>,
        <option>Guianense</option>,
        <option>Haitiano</option>,
        <option>Hondurenho</option>,
        <option>Jamaicano</option>,
        <option>Mexicano</option>,
        <option>Nicaraguense</option>,
        <option>Panamenho</option>,
        <option>Paraguaio</option>,
        <option>Peruano</option>,
        <option>Portorriquenho</option>,
        <option>Dominicana</option>,
        <option>São-cristovense</option>,
        <option>São-vicentino</option>,
        <option>Santa-lucense</option>,
        <option>Surinamês</option>,
        <option>Trindadense</option>,
        <option>Uruguaio</option>,
        <option>Venezuelano</option>,
        <option>Alemã</option>,
        <option>Austríac</option>,
        <option>Belga</option>,
        <option>Croata</option>,
        <option>Dinamarquês</option>,
        <option>Antiguano</option>,
        <option> Argentino</option>,
        <option>Bahamense</option>,
        <option>barbadense</option>,
        <option>Belizenho</option>,
        <option>Eslovaco</option>,
        <option>Esloveno</option>,
        <option>Espanhol</option>,
        <option>Francês</option>,
        <option>Grego</option>,
        <option>Húngaro</option>,
        <option>Irlandês</option>,
        <option>Italiano</option>,
        <option>Noruego</option>,
        <option>Holandês</option>,
        <option>Polonês</option>,
        <option>Inglês</option>,
        <option>Galês</option>,
        <option>Escocês</option>,
        <option>Romeno</option>,
        <option>Russo</option>,
        <option>Sérvio</option>,
        <option>Sueco</option>,
        <option>Suíço</option>,
        <option>Turco</option>,
        <option>Ucraniano</option>,
        <option>Americano</option>,
        <option>Canadense</option>,
        <option>Angolano</option>,
        <option>Moçambicano</option>,
        <option>Sul-africano</option>,
        <option>Zimbabuense</option>,
        <option>Argélia</option>,
        <option>Comorense</option>,
        <option>Egípcio</option>,
        <option>Líbio</option>,
        <option>Marroquino</option>,
        <option>Ganés</option>,
        <option>Queniano</option>,
        <option>Ruandês</option>,
        <option>Ugandense</option>,
        <option>Bechuano</option>,
        <option>Marfinense</option>,
        <option>Camaronense</option>,
        <option>Nigeriano</option>,
        <option>Somali</option>,
        <option>Australiano</option>,
        <option>Neozelandês</option>,
        <option>Afegão</option>,
        <option>Saudita</option>,
        <option>Armeno</option>,
        <option>Bangladesh</option>,
        <option>Chinês</option>,
        <option>Norte-coreano</option>,
        <option>Sul-coreano</option>,
        <option>Indiano</option>,
        <option>Indonésio</option>,
        <option>Iraquiano</option>,
        <option>Iraniano</option>,
        <option>Israelita</option>,
        <option>Japonês</option>,
        <option>Malaio</option>,
        <option>Nepalês</option>,
        <option>Omanense</option>,
        <option>Paquistanês</option>,
        <option>Palestino</option>,
        <option>Qatarense</option>,
        <option>Sírio</option>,
        <option>Cingalês</option>,
        <option>Tailandês</option>,
        <option>Timorense</option>,
        <option>Árabe</option>,
        <option>Vietnamita</option>,
        <option>Iemenita</option>
                            </Form.Select>
                        </div>

                    </Form.Group>

                    <Form.Group className="d-flex mb-3 p-2">
                        <div className='w-50'>
                            <Form.Label>Curso</Form.Label>
                            <Form.Control type="name" name="country"
                                placeholder='' className='register--input'
                                onChange={handleChangeValues}></Form.Control>

                            <Form.Group className="mb-3">
                                <div>
                                    <Form.Label></Form.Label>
                                    <Form.Select onChange={handleChangeValues}>
                                        <option>Diurno</option>
                                        <option>Noturno</option>

                                    </Form.Select>
                                </div>
                            </Form.Group>


                        </div>

                        <div className="mx-1"></div>


                    </Form.Group>

                </Form>

                <Button className='register--button'
                    variant="success" type="submit" onClick={() => handleClickButton()}>
                    Submit
                </Button>
                
            </div>
            <div className="d-flex justify-content-center ">
            <Alunos />
            </div>
        </>
    )
}