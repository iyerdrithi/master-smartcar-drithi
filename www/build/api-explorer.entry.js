import { r as registerInstance, e as createEvent, h } from './core-4ccd584b.js';

const ApiExplorer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.formControls = {
            email: null,
            name: null,
            phone: null,
        };
        this.formElementUpdated = createEvent(this, "formElementUpdated", 7);
    }
    handleClick(e) {
        e.preventDefault();
        // console.log(this.formControls);
        let body = document.getElementById("response");
        let label = document.getElementById("responseLabel");
        label.value = "Status: Success";
        body.value = JSON.stringify(this.formControls);
    }
    changeFormValue(controlName, request) {
        // console.log("hello");
        this.formControls = Object.assign(Object.assign({}, this.formControls), { [controlName]: request });
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, " API Explorer "))),
            h("ion-content", null, h("form", null, h("ion-item", null, h("ion-grid", { class: "ion-no-padding" }, h("ion-row", null, h("ion-text", { class: "font", color: "primary" }, " Add a new user ")), h("ion-row", null, h("ion-text", null, " POST "))), h("ion-grid", { class: "ion-no-padding" }, h("ion-row", null, h("ion-text", { class: "font", color: "primary" }, " Base URL ")), h("ion-row", null, h("ion-text", null, " https://jsonplaceholder.typicode.com/ ")))), h("ion-item", null, h("ion-row", { class: "font" }, h("ion-text", { class: "ion-padding-top", color: "primary" }, " Body ")), h("ion-label", { position: "floating" }, " Email "), h("ion-input", { required: true, name: "email", type: "email", placeholder: "johndoe@google.com", value: this.formControls.email, onInput: (ev) => this.changeFormValue("email", ev.target.value) }, " ")), h("ion-item", null, h("ion-label", { position: "floating" }, " Full Name "), h("ion-input", { required: true, name: "full-name", type: "text", placeholder: "John Doe", value: this.formControls.name, onInput: (ev) => this.changeFormValue("name", ev.target.value) }, " ")), h("ion-item", null, h("ion-label", { position: "floating" }, " Phone Number "), h("ion-input", { required: true, name: "phone", type: "tel", pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', placeholder: "000-000-0000", value: this.formControls.phone, onInput: (ev) => this.changeFormValue("phone", ev.target.value) }, " ")), h("ion-button", { onClick: (e) => this.handleClick(e), expand: "block" }, "Send Request"), h("ion-item", null, h("ion-label", { color: "primary", class: "font", position: "floating" }, " Response "), h("ion-input", { id: "responseLabel", value: "Status: Not Sent", readonly: true }, " "), h("ion-textarea", { id: "response", readonly: true }))))
        ];
    }
    static get style() { return ".font{\n  font-weight: bold;\n}"; }
};

export { ApiExplorer as api_explorer };
