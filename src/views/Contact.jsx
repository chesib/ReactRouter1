import React from "react";
import Formcontact from "../components/Formcontact";

const Contact = () => {
	return (
		<div className="contact-container">
			<h1>Contacto Happy pet</h1>
			<p>
				¡Estamos encantados de escucharte! Contáctanos a través de los
				siguientes medios:
			</p>
			<ul>
				<li>Teléfono: (123) 456-7890</li>
				<li>Correo electrónico: happypet@gmail.com</li>
				<li>Redes sociales: @Happypet</li>
			</ul>
			<Formcontact />
		</div>
	);
};

export default Contact;
