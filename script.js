/**Vous commencerez par mettre en place le contrôle sur l'identifiant. Afin que le formulaire puisse être valide, l'identifiant doit être obligatoire.
-Petite subtilité : n'utilisez pas l'attribut required, car un utilisateur qui s'y connaît pourrait modifier la source HTML ! Il est toujours préférable d'effectuer les vérifications côté JS, puis côté back-end à la récupération des données.
-Attention, l'envoi du formulaire doit être bloqué si les conditions ne sont pas respectées. 
-Maintenant, ajoutez une vérification sur le mot de passe. Il est obligatoire et doit comporter au moins 6 caractères pour des raisons de sécurité.
-Afin de s'assurer que l'utilisateur ne fasse pas d'erreurs, et que son e-mail puisse être utilisé pour lui envoyer une newsletter, il va falloir mettre en place une vérification sur les adresses e-mails saisies : elles doivent être identiques et remplis par l'utilisateur.
-Rédigez un code regroupant tous les éléments de réponses des questions précédentes ainsi qu’un événement de type submit afin de valider le formulaire.*/
let identifiant = document.getElementById('identifiant');
let password = document.getElementById('password');
let email = document.getElementById('email');
let emailConfirmation = document.getElementById('email-confirm');
let annee = document.getElementById('annee');
let age = document.getElementById('age');
let form = document.querySelector('form');

let error = '';

function validIdentifiant(value) {
	if (value === '') {
		return "l'identifiant est obligatoire\n";
	}

	return '';
}

function validPassword(value) {
	if (value.length < 6) {
		return 'le mot de passe doit contenir au moins 6 caractères\n';
	}

	return '';
}

function validEmail(email, emailConfirmation) {
	if (email !== emailConfirmation) {
		return 'Les 2 adresses emails doivent être identiques\n';
	}

	return '';
}

form.addEventListener('submit', (event) => {
	error = '';
	error += validEmail(email.value, emailConfirmation.value);
	for (let count = 0; count < form.elements.length; count++) {
		if (form.elements[count].name === 'identifiant') {
			error += validIdentifiant(form.elements[count].value);
		} else if (form.elements[count].name === 'password') {
			error += validPassword(form.elements[count].value);
		}
	}

	if (error !== '') {
		alert(error);
		event.preventDefault();
	}
});

//OU
//?============Déclaration FORM-------START
/* (function () {
	'use strict';

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	let form = document.querySelector('.form-validation');

	form.addEventListener(
		'submit',
		function (event) {
			Array.from(form.elements).forEach((input) => {
				if (input.type !== 'submit') {
					if (!validateFields(input)) {
						event.preventDefault();
						event.stopPropagation();

						input.classList.remove('is-valid');
						input.classList.add('is-invalid');
						input.nextElementSibling.style.display = 'block';
					} else {
						input.nextElementSibling.style.display = 'none';
						input.classList.remove('is-invalid');
						input.classList.add('is-valid');
					}
				}
			});
		},
		false
	);
})();
//?============Déclaration FORM-------END
//*============Déclaration FONCTIONS Validation-------START
// Validation SAISIE
function validateRequired(input) {
	return !(input.value == '' || input.value == null);
}
// Validation LENGTH
function validateLength(input, minLength, maxLength) {
	return !(input.value.length < minLength || input.value.length > maxLength);
}
//Validation TXT
function validateText(input) {
	return input.value.match('^[A-Za-z]+$');
}
//Validation EMAIL
function validateEmail(input) {
	let EMAIL = input.value;
	let POSAT = EMAIL.indexOf('@');
	let POSDOT = EMAIL.lastIndexOf('.');

	return !(POSAT < 1 || POSDOT - POSAT < 2);
}
//*============Déclaration FONCTIONS Validation-------END
//?============Validation Form--------START
function validateFields(input) {
	let fieldname = input.name;
	//*identifiant
	if (fieldname == 'identifiant') {
		if (!validateRequired(input)) {
			return false;
		}

		if (!validateLength(input, 2, 20)) {
			return false;
		}

		if (!validateText(input)) {
			return false;
		}

		return true;
	}
	//*password
	if (fieldname == 'password') {
		if (!validateRequired(input)) {
			return false;
		}

		if (!validateLength(input, 6, 15)) {
			return false;
		}

		if (!validateText(input)) {
			return false;
		}

		return true;
	}
	//*email
	if (fieldname == 'email') {
		let emailConfirm = document.getElementById('email-confirm');
		let email = document.getElementById('email');
		if (!email.value == emailConfirm.value) {
			return false;
		}

		if (!validateRequired(input)) {
			return false;
		}

		if (!validateEmail(input)) {
			return false;
		}

		if (!validateText(input)) {
			return false;
		}

		return true;
	}
}
//?============Validation Form--------END
 */
