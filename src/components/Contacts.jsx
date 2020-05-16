import React, { memo } from "react";
import Contact from './Contact';

function Contacts(props) {
	const { contactData } = props;

	return (
		<div data-testid="contacts" className="container">
			<section className="contacts">
				<article className="contact">
					<span data-testid="contacts-avatar" className="contact__avatar" />
					<span data-testid="contacts-name" className="contact__data">Nome</span>
					<span data-testid="contacts-phone" className="contact__data">Telefone</span>
					<span data-testid="contacts-country" className="contact__data">País</span>
					<span data-testid="contacts-date" className="contact__data">Admissão</span>
					<span data-testid="contacts-company" className="contact__data">Empresa</span>
					<span data-testid="contacts-department" className="contact__data">Departamento</span>
				</article>

				{contactData && contactData.map(contacts => 
					<Contact key={contacts.id} contactData={contacts} />
				)}
			</section>
		</div>
	)
}

export default memo(Contacts);
