import { BasePage } from "../pageObject/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get makeAppointmentButton() {
    return cy.get('#btn-make-appointment');
  }
}