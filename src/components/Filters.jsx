import React, { useState } from 'react';

export default function Filters(props) {
	const { functionCallback } = props;
	const [ orderBy, setOrderBy ] = useState({
		name: true,
		country: true,
		admissionDate: true,
		company: true,
		department: true
	});
	const [sorted, setSorted] = useState('');

	function setNameOrder(order) {
		setOrderBy({...orderBy, name: order});
		functionCallback.sortByName(order);
		setSorted('name');
	}

	function setCountryOrder(order) {
		setOrderBy({...orderBy, country: order});
		functionCallback.sortByCountry(order);
		setSorted('country');
	}

	function setCompanyOrder(order) {
		setOrderBy({...orderBy, company: order});
		functionCallback.sortByCompany(order);
		setSorted('company');
	}

	function setDepartmentOrder(order) {
		setOrderBy({...orderBy, department: order});
		functionCallback.sortByDepartment(order);
		setSorted('department')
	}

	function setAdmissionDateOrder(order) {
		setOrderBy({...orderBy, admissionDate: order});
		functionCallback.sortByAdmissionDate(order);
		setSorted('admissionDate')
	}

	return (
		<div data-testid="filters" className="container">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={functionCallback && functionCallback.filterList} />
				</div>

				<button className={`filters__item ${sorted === 'name' ? 'is-selected' : ''}`} onClick={() => setNameOrder(!orderBy.name)}>
				Nome <i className={`fas fa-sort-${orderBy.name ? 'down' : 'up'}`} />
				</button>

				<button className={`filters__item ${sorted === 'country' ? 'is-selected' : ''}`} onClick={() => setCountryOrder(!orderBy.country)}>
				País <i className={`fas fa-sort-${orderBy.country ? 'down' : 'up'}`} />
				</button>

				<button className={`filters__item ${sorted === 'company' ? 'is-selected' : ''}`} onClick={() => setCompanyOrder(!orderBy.company)}>
				Empresa <i className={`fas fa-sort-${orderBy.company ? 'down' : 'up'}`} />
				</button>

				<button className={`filters__item ${sorted === 'department' ? 'is-selected' : ''}`} onClick={() => setDepartmentOrder(!orderBy.department)}>
				Departamento <i className={`fas fa-sort-${orderBy.department ? 'down' : 'up'}`} />
				</button>

				<button className={`filters__item ${sorted === 'admissionDate' ? 'is-selected' : ''}`} onClick={() => setAdmissionDateOrder(!orderBy.admissionDate)}>
				Data de admissão <i className={`fas fa-sort-${orderBy.admissionDate ? 'down' : 'up'}`} />
				</button>
			</section>
		</div>
	);
}
