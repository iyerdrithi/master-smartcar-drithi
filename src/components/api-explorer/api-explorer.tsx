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
  @Prop() request: any;
  @Event() formElementUpdated: EventEmitter;

  handleClick(e) {
    e.preventDefault();
    // console.log(this.formControls);
    let body = document.getElementById("response") as HTMLInputElement;
    let label = document.getElementById("responseLabel") as HTMLInputElement;
    label.value = "Status: Success"
    body.value=JSON.stringify(this.formControls)
  }

  changeFormValue(controlName, request) {
    // console.log("hello");
    this.formControls = {
      ...this.formControls,
      [controlName] : request
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
        <form>
        <ion-item>
          <ion-grid class={"ion-no-padding"}>
          <ion-row>
            <ion-text class={"font"} color={"primary"}> Add a new user </ion-text>
          </ion-row>
            <ion-row>
              <ion-text> POST </ion-text>
            </ion-row>
          </ion-grid>

          <ion-grid class={"ion-no-padding"}>
            <ion-row>
              <ion-text class={"font"} color={"primary"}> Base URL </ion-text>
            </ion-row>
            <ion-row>
              <ion-text> https://jsonplaceholder.typicode.com/ </ion-text>
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
            name={"full-name"}
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
            pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
            placeholder={"000-000-0000"}
            value={this.formControls.phone}
            onInput={(ev: any) => this.changeFormValue("phone", ev.target.value)}> </ion-input>
        </ion-item>
        <ion-button
          onClick={(e) => this.handleClick(e)}
          expand="block">Send Request</ion-button>
        <ion-item>
        <ion-label
            color={"primary"} class={"font"} position={"floating"}> Response </ion-label>
          <ion-input
              id={"responseLabel"}
              value={"Status: Not Sent"} readonly> </ion-input>
          <ion-textarea
            id={"response"} readonly>
          </ion-textarea>
        </ion-item>
        </form>
      </ion-content>
    ];
  }
}

