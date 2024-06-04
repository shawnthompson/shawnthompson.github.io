const elForm = document.getElementsByClassName("jsForm")[0];
const elEmail = document.getElementsByClassName("jsFieldEmail")[0];
const elName = document.getElementsByClassName("jsFieldName")[0];
const elMessage = document.getElementsByClassName("jsFieldMessage")[0];

const formErrors = {
	email: false,
	name: false,
	message: false
};

let hasSubmitted = false;

validateField({
	elField: elEmail,
	validateFn: validateFieldEmail
});

validateField({
	elField: elName,
	validateFn: validateFieldName
});

validateField({
	elField: elMessage,
	validateFn: validateFieldMessage
});

function validateField({ elField, validateFn }) {
	let touched = false;

	elField.addEventListener("change", (e) => {
		touched = true; // mark it as touched so that on blur it shows the error.
	});

	elField.addEventListener("keyup", (e) => {
		// remove any error on keyup if existent
		validateFn(e.target, { removeOnly: true });

		if (hasSubmitted) {
			validateAllFields();
		}
	});

	elField.addEventListener("blur", (e) => {
		if (!touched) return;
		// show error if touched
		validateFn(e.target, { live: true });
	});
}

function validateFieldEmail(el, opts) {
	const isEmpty = el.value === "";
	const errorMessage = el.getAttribute("data-error-message");
	updateFieldDOM(el, !isEmpty, errorMessage, opts);
	formErrors.email = isEmpty;
}

function validateFieldName(el, opts) {
	const isEmpty = el.value === "";
	const errorMessage = el.getAttribute("data-error-message");
	updateFieldDOM(el, !isEmpty, errorMessage, opts);
	formErrors.name = isEmpty;
}

function validateFieldMessage(el, opts) {
	const isEmpty = el.value === "";
	const errorMessage = el.getAttribute("data-error-message");
	updateFieldDOM(el, !isEmpty, errorMessage, opts);
	formErrors.message = isEmpty;
}

function updateFieldDOM(el, isValid, errorMessage, opts) {
	const removeOnly = opts?.removeOnly;
	const isLive = opts?.live;
	const elField = el.closest(".field");
	const elError = elField.querySelector(".field-error");

	if (isValid) {
		elField.classList.remove("isInvalid");
		elError.innerText = ""; // It's valid
		el.removeAttribute("aria-invalid");
	} else if (!removeOnly) {
		elField.classList.add("isInvalid");
		el.setAttribute("aria-invalid", "true");
		elError.setAttribute("aria-live", isLive ? "assertive" : "off");
		elError.innerText = errorMessage;
	}
}

function validateAllFields() {
	validateFieldEmail(elEmail);
	validateFieldName(elName);
	validateFieldMessage(elMessage);
}

elForm.addEventListener("submit", (e) => {
	e.preventDefault();
	hasSubmitted = true;

	// Validate all fields
	validateAllFields();

	// Check if all form errors are false
	const allFieldsValid = Object.values(formErrors).every(error => !error);

	if (allFieldsValid) {
		// If there are no errors, submit the form using fetch API
		const formData = new FormData(elForm);

		fetch(elForm.action, {
			method: 'POST',
			body: formData
		})
			.then(response => {
				if (response.ok) {
					window.location.href = '/thanks/'; // Replace with your desired URL
				} else {
					console.error('Form submission failed');
				}
			})
			.catch(error => {
				console.error('Form submission error', error);
			});
	} else {
		// If there are errors, set focus to the first field with an error
		if (formErrors.name) {
			elName.focus();
		} else if (formErrors.email) {
			elEmail.focus();
		} else if (formErrors.message) {
			elMessage.focus();
		}
	}
});
