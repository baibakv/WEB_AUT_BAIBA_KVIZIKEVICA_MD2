import { BasePage } from "../pageObject/basePage";

export class HistoryPage extends BasePage{
    static get url() {
        return "/#/history.php#history";
    }

    static get appointmentCheck(){
        return cy.get('#history');
    }
}