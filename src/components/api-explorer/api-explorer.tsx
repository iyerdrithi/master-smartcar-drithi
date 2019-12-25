import {Component, Event, EventEmitter, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'api-explorer',
  styleUrl: 'api-explorer.css'
})
export class ApiExplorer {
  @State() formControls = {
    email: null,
    name: null,
    phone: null,
  };
  @Prop() value: any;
  @Event() formElementUpdated: EventEmitter;

  handleClick(e) {
    e.preventDefault();
    // console.log(this.formControls);
    console.log(JSON.stringify(this.formControls));
    return [
    <ion-textarea
      value={JSON.stringify(this.formControls)}> </ion-textarea>
      ];
  }

  changeFormValue(controlName, value) {
    console.log("hello");
    this.formControls = {
      ...this.formControls,
      [controlName] : value
    };
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title> API Explorer </ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-item>
          <ion-grid class={"ion-no-padding"}>
          <ion-row>
            <ion-col>
            <ion-text class={"font"} color={"primary"}> Add a new user </ion-text>
            </ion-col>
          </ion-row>
            <ion-row>
            <ion-col>
              <ion-text> POST </ion-text>
            </ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid class={"ion-no-padding"}>
            <ion-row>
              <ion-col>
              <ion-text class={"font"} color={"primary"}> Base URL </ion-text>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
              <ion-text> https://jsonplaceholder.typicode.com/ </ion-text>
              </ion-col>
              </ion-row>
          </ion-grid>
        </ion-item>

        <ion-item>
          <ion-row class={"font"}>
            <ion-text class={"ion-padding-top"} color={"primary"}> Body </ion-text>
          </ion-row>
          <ion-label position={"floating"}> Email </ion-label>
          <ion-input
            required={true}
            name={"email"}
            type={"email"}
            placeholder={"johndoe@google.com"}
            value={this.formControls.email}
            onInput={(ev: any) => this.changeFormValue("email", ev.target.value)}> </ion-input>
          </ion-item>
        <ion-item>
          <ion-label position={"floating"}> Full Name </ion-label>
          <ion-input
            required={true}
            name={"name"}
            type={"text"}
            placeholder={"John Doe"}
            value={this.formControls.name}
            onInput={(ev: any) => this.changeFormValue("name", ev.target.value)}> </ion-input>
        </ion-item>
        <ion-item>
          <ion-label position={"floating"}> Phone Number </ion-label>
          <ion-input
            required={true}
            name={"phone"}
            type={"tel"}
            placeholder={"000-0000"}
            value={this.formControls.phone}
            onInput={(ev: any) => this.changeFormValue("phone", ev.target.value)}> </ion-input>
        </ion-item>
        <ion-button
          onClick={(e) => this.handleClick(e)}
          expand="block">Send Request</ion-button>
      </ion-content>
    ];
  }
}
