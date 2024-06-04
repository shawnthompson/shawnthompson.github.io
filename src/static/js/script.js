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
			updateSubmitSummary();
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
	updateFieldDOM(el, !isEmpty, "Email can not be left blank.", opts);
	formErrors.email = isEmpty;
}

function validateFieldName(el, opts) {
	const isEmpty = el.value === "";
	updateFieldDOM(el, !isEmpty, "Name can not be left blank.", opts);
	formErrors.name = isEmpty;
}

function validateFieldMessage(el, opts) {
	const isEmpty = el.value === "";
	updateFieldDOM(el, !isEmpty, "Message can not be left blank.", opts);
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

function updateSubmitSummary({ isSubmit } = {}) {
	const elSummary = elForm.querySelector(".form-feedback");
	const elSummaryMsg = elSummary.querySelector(".form-feedback-msg");

	// Clear form feedback
	elSummaryMsg.classList.remove("isInvalid");
	elSummaryMsg.classList.remove("isSuccess");
	elSummaryMsg.innerText = "";
	const errorsState = Object.values(formErrors);

	if (errorsState.includes(true)) {
		// Show error msg
		const errorCount = Object.values(formErrors).reduce((total, hasError) => {
			return hasError ? total + 1 : total;
		}, 0);
		const errorMsg =
			errorCount === 1
				? `Failed to save because ${errorCount} field is invalid.`
				: `Failed to save because ${errorCount} fields are invalid.`;
		elSummaryMsg.classList.add("isInvalid");
		elSummaryMsg.innerText = errorMsg;

		elSummary.querySelector(".form-feedback-sr").innerText = isSubmit
			? // Set SR error message only on submit to avoid being re-announced
			// every time the error summary visually changes.
			errorMsg
			: "";
	} else if (isSubmit) {
		const successMsg = "Saved with success.";
		elSummary.querySelector(".form-feedback-sr").innerText = successMsg;
		elSummaryMsg.innerText = successMsg;
		elSummaryMsg.classList.add("isSuccess");
	}
}

elForm.addEventListener("submit", (e) => {
	e.preventDefault();
	hasSubmitted = true;

	// Validate all fields
	validateFieldEmail(elEmail);
	validateFieldName(elName);
	validateFieldMessage(elMessage);

	// Check if all form errors are false
	const allFieldsValid = Object.values(formErrors).every(error => !error);

	if (allFieldsValid) {
		// If there are no errors, submit the form
		elForm.submit();
	} else {
		// If there are errors, set focus to the first field with an error
		if (formErrors.name) {
			elName.focus();
		} else if (formErrors.email) {
			elEmail.focus();
		} else if (formErrors.message) {
			elMessage.focus();
		}

		// Update the submit summary with error message
		updateSubmitSummary({ isSubmit: true });
	}
});