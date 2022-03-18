import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ModalController, AlertController, IonContent, Platform, ToastController } from '@ionic/angular';
import { Subscription } from "rxjs";
import * as moment from 'moment';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';


@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  @ViewChild(IonContent, { read: IonContent }) content: IonContent;
  @ViewChild('scrollTargetTopGrid') targetx: any;

  process = 'signup';
  focused = false;

  private subscription: Subscription;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private platform: Platform,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }


  dob = '';
  maxDobDate = moment().format('YYYY-MM-DD');

  public subPage = 1;

  ngOnInit () {
  }

  ngOnDestroy () {
  }

  ionViewWillEnter () {
  }

  ionViewDidEnter () {
  }

  ionViewWillLeave () {
  }

  onSelectBirthdate () {
    this.modalCtrl
      .create({
        component: DatePickerComponent,
        componentProps: {
          date: this.dob,
          minDate: null,
          maxDate: this.maxDobDate
        },
        cssClass: 'bfsc-modal-class',
        backdropDismiss: false
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(dateResult => {
        if (dateResult && dateResult.data && dateResult.data.date) {
          this.dob = dateResult.data.date;
        }
      });
  }
}
