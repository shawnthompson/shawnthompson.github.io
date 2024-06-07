// Get form and input elements by their class or ID
const elForm = document.getElementsByClassName("jsForm")[0];
const elEmail = document.getElementsByClassName("jsFieldEmail")[0];
const elName = document.getElementsByClassName("jsFieldName")[0];
const elMessage = document.getElementsByClassName("jsFieldMessage")[0];
const elHoneypot = document.getElementById("honey");

// Object to keep track of form errors
const formErrors = {
	email: false,
	name: false,
	message: false,
	honey: false
};

// Flag to check if the form has been submitted
let hasSubmitted = false;

// Validate individual fields on change, keyup, and blur events
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

// Function to add event listeners for validation on change, keyup, and blur events
function validateField({ elField, validateFn }) {
	let touched = false;

	// Mark the field as touched on change
	elField.addEventListener("change", (e) => {
		touched = true;
	});

	// Validate the field on keyup and remove error if valid
	elField.addEventListener("keyup", (e) => {
		validateFn(e.target, { removeOnly: true });

		if (hasSubmitted) {
			validateAllFields();
		}
	});

	// Validate the field on blur if it has been touched
	elField.addEventListener("blur", (e) => {
		if (!touched) return;
		validateFn(e.target, { live: true });
	});
}

// Validation function for the email field
function validateFieldEmail(el, opts) {
	const isEmpty = el.value === "";
	const errorMessage = el.getAttribute("data-error-message");
	updateFieldDOM(el, !isEmpty, errorMessage, opts);
	formErrors.email = isEmpty;
}

// Validation function for the name field
function validateFieldName(el, opts) {
	const isEmpty = el.value === "";
	const errorMessage = el.getAttribute("data-error-message");
	updateFieldDOM(el, !isEmpty, errorMessage, opts);
	formErrors.name = isEmpty;
}

// Validation function for the message field
function validateFieldMessage(el, opts) {
	const isEmpty = el.value === "";
	const errorMessage = el.getAttribute("data-error-message");
	updateFieldDOM(el, !isEmpty, errorMessage, opts);
	formErrors.message = isEmpty;
}

// Function to update the DOM with validation results
function updateFieldDOM(el, isValid, errorMessage, opts) {
	const removeOnly = opts?.removeOnly;
	const isLive = opts?.live;
	const elField = el.closest(".field");
	const elError = elField.querySelector(".field-error");

	// If the field is valid, remove error styling and message
	if (isValid) {
		elField.classList.remove("isInvalid");
		elError.innerText = ""; // It's valid
		el.removeAttribute("aria-invalid");
	} else if (!removeOnly) {
		// If the field is invalid, add error styling and message
		elField.classList.add("isInvalid");
		el.setAttribute("aria-invalid", "true");
		elError.setAttribute("aria-live", isLive ? "assertive" : "off");
		elError.innerText = errorMessage;
	}
}

// Function to validate all fields
function validateAllFields() {
	validateFieldEmail(elEmail);
	validateFieldName(elName);
	validateFieldMessage(elMessage);

	// Check honeypot field
	const isHoneyFilled = elHoneypot.value !== "";
	formErrors.honey = isHoneyFilled;
}

// Form submission event listener
elForm.addEventListener("submit", (e) => {
	e.preventDefault(); // Prevent the default form submission
	hasSubmitted = true; // Set the form submission flag

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
					// Redirect to the desired URL after successful submission
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
		} else if (formErrors.honey) {
			// Log a message if the honeypot field is filled (possible bot submission)
			console.error('Honeypot field is filled, possible bot submission.');
		}
	}
});
