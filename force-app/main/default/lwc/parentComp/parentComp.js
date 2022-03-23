import { LightningElement, track } from 'lwc';

export default class ParentComp extends LightningElement {
    @track progressValue = 0;
    hanldeProgressValueChange(event) {
      this.progressValue = event.detail;
    }
}