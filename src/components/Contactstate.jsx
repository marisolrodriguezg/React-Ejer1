import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { useState } from 'react';

const Contactstate = ({contact}) => {
    const [conected, conect] = useState(false);

  const changeState = () => {
    conect(!conected);
  };
    return (
        <div>
        <h1>Nombre: {contact.names}</h1>
        <h1>Apellido: {contact.surname}</h1>
        <h1>Email: {contact.email}</h1>
        <h1>{conected ? "CONECTADO" : "DESCONECTADO"}</h1>
        <button onClick={changeState}>Conectar/Desconectar</button>
        </div>
    );
};


Contactstate.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default Contactstate;
