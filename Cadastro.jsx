import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavMenu from '../components/NavMenu';
import axios from 'axios';
import Alunos from '../components/Alunos';



export default function Cadastro() {
    const [values, setValues] = useState();
    const [listRegistro, setListRegistro] = useState();

    console.log(listRegistro);
    
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    /* lida com o submit e apresenta todos os valores do Form */
    const handleClickButton = () => {
        /* console.log(values); */
        axios.post("http://localhost:3001/register", {
            nome: values.nome,
            nascimento: values.nascimento,
            nacionalidade: values.nacionalidade,
        }).then((response) => {
            console.log(response);
        })
    };

    useEffect(() => {
        axios.get("http://localhost:3001/getAlunos").then((response) => {
            setListRegistro(response.data);
        });
    }, []);

    return (
        <>
            <NavMenu />
            <div className="d-flex justify-content-center align-items-center vh-100 w-full">
                <Form className='d-flex flex-column border border-2 border-success p-2 rounded'>
                    <h1 className='text-center'>Registro</h1>
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
                                <option>Guian??s</option>,
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
                                <option>S??o-cristovense</option>,
                                <option>S??o-vicentino</option>,
                                <option>Santa-lucense</option>,
                                <option>Surinam??s</option>,
                                <option>Trindadense</option>,
                                <option>Uruguaio</option>,
                                <option>Venezuelano</option>,
                                <option>Alem??</option>,
                                <option>Austr??ac</option>,
                                <option>Belga</option>,
                                <option>Croata</option>,
                                <option>Dinamarqu??s</option>,
                                <option>Antiguano</option>,
                                <option> Argentino</option>,
                                <option>Bahamense</option>,
                                <option>barbadense</option>,
                                <option>Belizenho</option>,
                                <option>Eslovaco</option>,
                                <option>Esloveno</option>,
                                <option>Espanhol</option>,
                                <option>Franc??s</option>,
                                <option>Grego</option>,
                                <option>H??ngaro</option>,
                                <option>Irland??s</option>,
                                <option>Italiano</option>,
                                <option>Noruego</option>,
                                <option>Holand??s</option>,
                                <option>Polon??s</option>,
                                <option>Ingl??s</option>,
                                <option>Gal??s</option>,
                                <option>Escoc??s</option>,
                                <option>Romeno</option>,
                                <option>Russo</option>,
                                <option>S??rvio</option>,
                                <option>Sueco</option>,
                                <option>Su????o</option>,
                                <option>Turco</option>,
                                <option>Ucraniano</option>,
                                <option>Americano</option>,
                                <option>Canadense</option>,
                                <option>Angolano</option>,
                                <option>Mo??ambicano</option>,
                                <option>Sul-africano</option>,
                                <option>Zimbabuense</option>,
                                <option>Arg??lia</option>,
                                <option>Comorense</option>,
                                <option>Eg??pcio</option>,
                                <option>L??bio</option>,
                                <option>Marroquino</option>,
                                <option>Gan??s</option>,
                                <option>Queniano</option>,
                                <option>Ruand??s</option>,
                                <option>Ugandense</option>,
                                <option>Bechuano</option>,
                                <option>Marfinense</option>,
                                <option>Camaronense</option>,
                                <option>Nigeriano</option>,
                                <option>Somali</option>,
                                <option>Australiano</option>,
                                <option>Neozeland??s</option>,
                                <option>Afeg??o</option>,
                                <option>Saudita</option>,
                                <option>Armeno</option>,
                                <option>Bangladesh</option>,
                                <option>Chin??s</option>,
                                <option>Norte-coreano</option>,
                                <option>Sul-coreano</option>,
                                <option>Indiano</option>,
                                <option>Indon??sio</option>,
                                <option>Iraquiano</option>,
                                <option>Iraniano</option>,
                                <option>Israelita</option>,
                                <option>Japon??s</option>,
                                <option>Malaio</option>,
                                <option>Nepal??s</option>,
                                <option>Omanense</option>,
                                <option>Paquistan??s</option>,
                                <option>Palestino</option>,
                                <option>Qatarense</option>,
                                <option>S??rio</option>,
                                <option>Cingal??s</option>,
                                <option>Tailand??s</option>,
                                <option>Timorense</option>,
                                <option>??rabe</option>,
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
                    <Button className='register--button '
                        variant="success" type="submit" onClick={() => handleClickButton()}>
                        Submit
                    </Button>
                </Form>

                <Form className='d-flex flex-column border border-2 border-success p-2 m-2 w-25 rounded'>
                    <div >
                        {typeof listRegistro !== "undefined" &&
                            listRegistro.map((value) => {
                                return (
                                    <Alunos
                                        key={value.id}
                                        listAlunos={listRegistro}
                                        setlistAlunos={setListRegistro}
                                        id={value.id}
                                        nome={value.nome}
                                        nascimento={value.nascimento}
                                        nacionalidade={value.nacionalidade}
                                    ></Alunos>
                                )
                            })}
                    </div>
                </Form>


            </div>

        </>
    )
}
