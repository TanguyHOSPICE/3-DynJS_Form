/**Vous commencerez par mettre en place le contrôle sur l'identifiant. Afin que le formulaire puisse être valide, l'identifiant doit être obligatoire.
-Petite subtilité : n'utilisez pas l'attribut required, car un utilisateur qui s'y connaît pourrait modifier la source HTML ! Il est toujours préférable d'effectuer les vérifications côté JS, puis côté back-end à la récupération des données.
-Attention, l'envoi du formulaire doit être bloqué si les conditions ne sont pas respectées. 
-Maintenant, ajoutez une vérification sur le mot de passe. Il est obligatoire et doit comporter au moins 6 caractères pour des raisons de sécurité.
-Afin de s'assurer que l'utilisateur ne fasse pas d'erreurs, et que son e-mail puisse être utilisé pour lui envoyer une newsletter, il va falloir mettre en place une vérification sur les adresses e-mails saisies : elles doivent être identiques et remplis par l'utilisateur.
-Rédigez un code regroupant tous les éléments de réponses des questions précédentes ainsi qu’un événement de type submit afin de valider le formulaire.*/
let identifiant = document.getElementById('identifiant');

let field = document.querySelectorAll('.field');
/* 
identifiant.addEventListener('input', (e) => {
	if (e.target.value !== '' || e.target.value !== null) {
		e.preventDefault();
		field[0].innerHTML += `<p>Il est nécessaire de rentrer un identifiant</p>`;
	}
}); */
//OU
//?============Déclaration FORM-------START
(function () {
	'use strict';

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	let forms = document.querySelector('.form-validation');

	(function (validateForm) {
		validateForm.addEventListener(
			'submit',
			function (event) {
				Array.from(forms.elements).forEach((input) => {
					if (input.type !== 'submit') {
						if (!validateFiels(input)) {
							event.preventDefault();
							event.stopPropagation();

							input.classList.remove('is-valid');
							input.classList.add('is-invalid');
						} else {
							input.classList.remove('is-invalid');
							input.classList.add('is-valid');
						}
					}
				});
			},
			false
		);
	});
})();
//?============Déclaration FORM-------END
// const validIdentifiant = () => {};
