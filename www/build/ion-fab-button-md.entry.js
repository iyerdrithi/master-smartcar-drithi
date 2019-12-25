import { r as registerInstance, e as createEvent, d as getIonMode, h, H as Host, f as getElement } from './core-4ccd584b.js';
import { h as hostContext, c as createColorClasses, o as openURL } from './theme-215399f6.js';

const FabButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the fab button will be show a close icon.
         */
        this.activated = false;
        /**
         * If `true`, the user cannot interact with the fab button.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * If `true`, the fab button will show when in a fab-list.
         */
        this.show = false;
        /**
         * If `true`, the fab button will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
    }
    render() {
        const { el, disabled, color, href, activated, show, translucent, size } = this;
        const inList = hostContext('ion-fab-list', el);
        const mode = getIonMode(this);
        const TagType = href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href,
                rel: this.rel,
                target: this.target
            };
        return (h(Host, { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, createColorClasses(color)), { [mode]: true, 'fab-button-in-list': inList, 'fab-button-translucent-in-list': inList && translucent, 'fab-button-close-active': activated, 'fab-button-show': show, 'fab-button-disabled': disabled, 'fab-button-translucent': translucent, 'ion-activatable': true, 'ion-focusable': true, [`fab-button-${size}`]: size !== undefined }) }, h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: (ev) => openURL(href, ev, this.routerDirection) }), h("span", { class: "close-icon" }, h("ion-icon", { name: "close", lazy: false })), h("span", { class: "button-inner" }, h("slot", null)), mode === 'md' && h("ion-ripple-effect", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the button\n   * \@prop --background-activated: Background of the button when pressed\n   * \@prop --background-focused: Background of the button when focused with the tab key\n   * \@prop --background-hover: Background of the button on hover\n   *\n   * \@prop --color: Text color of the button\n   * \@prop --color-activated: Text color of the button when pressed\n   * \@prop --color-focused: Text color of the button when focused with the tab key\n   * \@prop --color-hover: Text color of the button on hover\n   *\n   * \@prop --transition: Transition of the button\n   *\n   * \@prop --border-radius: Border radius of the button\n   * \@prop --border-width: Border width of the button\n   * \@prop --border-style: Border style of the button\n   * \@prop --border-color: Border color of the button\n   *\n   * \@prop --ripple-color: Color of the button ripple effect\n   *\n   * \@prop --box-shadow: Box shadow of the button\n   *\n   * \@prop --padding-top: Top padding of the button\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button\n   * \@prop --padding-bottom: Bottom padding of the button\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button\n   */\n  --color-hover: var(--color);\n  --background-hover: var(--ion-color-primary-tint, #4c8dff);\n  --transition: background-color, opacity 100ms linear;\n  --ripple-color: currentColor;\n  --border-radius: 50%;\n  --border-width: 0;\n  --border-style: none;\n  --border-color: initial;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: block;\n  width: 56px;\n  height: 56px;\n  font-size: 14px;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: var(--transform);\n  transform: var(--transform);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  background-clip: padding-box;\n  color: var(--color);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  contain: strict;\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n::slotted(ion-icon) {\n  line-height: 1;\n}\n\n.button-inner {\n  left: 0;\n  right: 0;\n  top: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n\n:host(.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.fab-button-disabled) {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n:host(.fab-button-disabled) .button-native {\n  cursor: default;\n  pointer-events: none;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    background: var(--background-hover);\n    color: var(--color-hover);\n  }\n\n  :host(.ion-color:hover) .button-native {\n    background: var(--ion-color-tint);\n    color: var(--ion-color-contrast);\n  }\n}\n:host(.ion-focused) .button-native {\n  background: var(--background-focused);\n  color: var(--color-focused);\n}\n\n:host(.ion-color.ion-focused) .button-native {\n  background: var(--ion-color-shade);\n}\n\n:host(.activated) .button-native {\n  background: var(--background-activated);\n  color: var(--color-activated);\n}\n\n:host(.ion-color.ion-focused) .button-native,\n:host(.ion-color.activated) .button-native {\n  background: var(--ion-color-shade);\n  color: var(--ion-color-contrast);\n}\n\n::slotted(ion-icon) {\n  line-height: 1;\n}\n\n:host(.fab-button-small) {\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: 40px;\n  height: 40px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.fab-button-small) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 8px;\n    margin-inline-start: 8px;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n.close-icon {\n  left: 0;\n  right: 0;\n  top: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  -webkit-transform: scale(0.4) rotateZ(-45deg);\n  transform: scale(0.4) rotateZ(-45deg);\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  opacity: 0;\n}\n\n:host(.fab-button-close-active) .close-icon {\n  -webkit-transform: scale(1) rotateZ(0deg);\n  transform: scale(1) rotateZ(0deg);\n  opacity: 1;\n}\n\n:host(.fab-button-close-active) .button-inner {\n  -webkit-transform: scale(0.4) rotateZ(45deg);\n  transform: scale(0.4) rotateZ(45deg);\n  opacity: 0;\n}\n\nion-ripple-effect {\n  color: var(--ripple-color);\n}\n\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  :host(.fab-button-translucent) .button-native {\n    -webkit-backdrop-filter: var(--backdrop-filter);\n    backdrop-filter: var(--backdrop-filter);\n  }\n}\n:host {\n  --background: var(--ion-color-primary, #3880ff);\n  --background-activated: var(--background);\n  --background-focused: var(--background-activated);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --color-activated: var(--ion-color-primary-contrast, #fff);\n  --color-focused: var(--color-activated);\n  --box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n}\n\n:host(.activated) {\n  --box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n::slotted(ion-icon),\n.close-icon {\n  font-size: 24px;\n}\n\n:host(.fab-button-in-list) {\n  --color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);\n  --color-activated: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);\n  --color-focused: var(--color-activated);\n  --background: var(--ion-color-light, #f4f5f8);\n  --background-activated: var(--ion-color-light-shade, #d7d8da);\n  --background-focused: var(--background-activated);\n  --background-hover: var(--ion-color-light-tint, #f5f6f9);\n}\n\n:host(.fab-button-in-list) ::slotted(ion-icon) {\n  font-size: 18px;\n}"; }
};

export { FabButton as ion_fab_button };
