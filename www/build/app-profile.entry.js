import { r as registerInstance, h } from './core-4ccd584b.js';

const AppProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.state = false;
    }
    formattedName() {
        if (this.name) {
            return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Profile: ", this.name))),
            h("ion-content", { class: "ion-padding" }, h("form", null, h("ion-item", null, h("ion-label", null, " Email "), h("ion-input", { type: "email" }, " ")), h("ion-item", null, h("ion-label", null, " Password "), h("ion-input", { type: "password" }, " "))))
        ];
    }
    static get style() { return ""; }
};

export { AppProfile as app_profile };
