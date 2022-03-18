import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import * as moment from "moment";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() minDate: string;
  @Input() maxDate: string;
  @Input() date: string;
  @Input() dateTypeText: string; // e.g. expiry

  constructor(
    private modalCtrl: ModalController,
  ) { }

  private _id = uuidv4();
  dateSelected = false;
  // maxDate = moment().format('YYYY-MM-DD');
  // minDate = moment().subtract(1, 'month').format('YYYY-MM-DD');

  isInit = true;
  modes = ['date', 'date-time', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = this.modes[0];

  ngOnInit () {
    // this.date = this.date ? moment(this.date).toISOString() : moment(new Date()).toISOString();
    this.isInit = true;
    this.date = this.date ? this.date : moment().format("YYYY-MM-DDT00:00:00.000") + "Z";
    this.minDate = this.minDate || '1900-01-01';
    this.maxDate = this.maxDate || moment().format('YYYY-MM-DD');
  }

  ionViewDidEnter () {
    this.isInit = false;
  }

  onCloseModal () {
    const data = { date: this.date };
    this.modalCtrl.dismiss(data, 'selected');
  }

  onDatePickerCancel () {
    this.modalCtrl.dismiss(null, 'cancelled');
  }

  onSelectDate (value) {

    if (!value) {
      return;
    }

    this.dateSelected = true;
    this.date = value;

    alert('Passed date value: ' + this.date);

    if (!this.isInit) {
      this.onCloseModal();
    }

  }

}
