import { r as registerInstance, h, d as getIonMode, H as Host } from './core-4ccd584b.js';
import { o as openURL, c as createColorClasses } from './theme-215399f6.js';

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, a button tag will be rendered and the card will be tappable.
         */
        this.button = false;
        /**
         * The type of the button. Only used when an `onclick` or `button` property is present.
         */
        this.type = 'button';
        /**
         * If `true`, the user cannot interact with the card.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    renderCard(mode) {
        const clickable = this.isClickable();
        if (!clickable) {
            return [
                h("slot", null)
            ];
        }
        const { href, routerDirection } = this;
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                rel: this.rel,
                target: this.target
            };
        return (h(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled, onClick: (ev) => openURL(href, ev, routerDirection) }), h("slot", null), clickable && mode === 'md' && h("ion-ripple-effect", null)));
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(this.color)), { 'card-disabled': this.disabled, 'ion-activatable': this.isClickable() }) }, this.renderCard(mode)));
    }
    static get style() { return ".sc-ion-card-md-h {\n  \n  --ion-safe-area-left: 0px;\n  --ion-safe-area-right: 0px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden;\n}\n\n.ion-color.sc-ion-card-md-h {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n.sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-header , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-title , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-subtitle  {\n  color: var(--ion-color-contrast);\n}\n\n.sc-ion-card-md-s  img  {\n  display: block;\n  width: 100%;\n}\n\n.sc-ion-card-md-s  ion-list  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.card-disabled.sc-ion-card-md-h {\n  cursor: default;\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.card-native.sc-ion-card-md {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: block;\n  width: 100%;\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n}\n\n.card-native.sc-ion-card-md::-moz-focus-inner {\n  border: 0;\n}\n\nbutton.sc-ion-card-md, a.sc-ion-card-md {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n\nion-ripple-effect.sc-ion-card-md {\n  color: var(--ripple-color);\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background, transparent);\n  --color: var(--ion-color-step-550, #737373);\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  font-size: 14px;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-card-md-h {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 10px;\n    margin-inline-start: 10px;\n    -webkit-margin-end: 10px;\n    margin-inline-end: 10px;\n  }\n}"; }
};

export { Card as ion_card };