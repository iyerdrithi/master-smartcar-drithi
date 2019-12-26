/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ApiExplorer {
    'request': any;
  }
  interface AppHome {}
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
}

declare global {


  interface HTMLApiExplorerElement extends Components.ApiExplorer, HTMLStencilElement {}
  var HTMLApiExplorerElement: {
    prototype: HTMLApiExplorerElement;
    new (): HTMLApiExplorerElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'api-explorer': HTMLApiExplorerElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface ApiExplorer {
    'onFormElementUpdated'?: (event: CustomEvent<any>) => void;
    'request'?: any;
  }
  interface AppHome {}
  interface AppProfile {
    'name'?: string;
  }
  interface AppRoot {}

  interface IntrinsicElements {
    'api-explorer': ApiExplorer;
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'api-explorer': LocalJSX.ApiExplorer & JSXBase.HTMLAttributes<HTMLApiExplorerElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
    }
  }
}


