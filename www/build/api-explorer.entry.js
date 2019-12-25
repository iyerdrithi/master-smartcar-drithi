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
        console.log(JSON.stringify(this.formControls));
        return [
            h("ion-textarea", { value: JSON.stringify(this.formControls) }, " ")
        ];
    }
    changeFormValue(controlName, value) {
        console.log("hello");
        this.formControls = Object.assign(Object.assign({}, this.formControls), { [controlName]: value });
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, " API Explorer "))),
            h("ion-content", null, h("ion-item", null, h("ion-grid", { class: "ion-no-padding" }, h("ion-row", null, h("ion-col", null, h("ion-text", { class: "font", color: "primary" }, " Add a new user "))), h("ion-row", null, h("ion-col", null, h("ion-text", null, " POST ")))), h("ion-grid", { class: "ion-no-padding" }, h("ion-row", null, h("ion-col", null, h("ion-text", { class: "font", color: "primary" }, " Base URL "))), h("ion-row", null, h("ion-col", null, h("ion-text", null, " https://jsonplaceholder.typicode.com/ "))))), h("ion-item", null, h("ion-row", { class: "font" }, h("ion-text", { class: "ion-padding-top", color: "primary" }, " Body ")), h("ion-label", { position: "floating" }, " Email "), h("ion-input", { required: true, name: "email", type: "email", placeholder: "johndoe@google.com", value: this.formControls.email, onInput: (ev) => this.changeFormValue("email", ev.target.value) }, " ")), h("ion-item", null, h("ion-label", { position: "floating" }, " Full Name "), h("ion-input", { required: true, name: "name", type: "text", placeholder: "John Doe", value: this.formControls.name, onInput: (ev) => this.changeFormValue("name", ev.target.value) }, " ")), h("ion-item", null, h("ion-label", { position: "floating" }, " Phone Number "), h("ion-input", { required: true, name: "phone", type: "tel", placeholder: "000-0000", value: this.formControls.phone, onInput: (ev) => this.changeFormValue("phone", ev.target.value) }, " ")), h("ion-button", { onClick: (e) => this.handleClick(e), expand: "block" }, "Send Request"))
        ];
    }
    static get style() { return ".font{\n  font-weight: bold;\n}"; }
};

export { ApiExplorer as api_explorer };
