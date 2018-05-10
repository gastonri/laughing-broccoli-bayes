import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CalculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculo',
  templateUrl: 'calculo.html',
})
export class CalculoPage {

  calculo: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.calculo = this.crearForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculoPage');
  }

  private crearForm() {
    return this.formBuilder.group({
      'c11': [''],
      'c12': [''],
      'py1': [''],
      'py2': [''],
      'estudioMercado': [''],
      'casoExito': [''],
      'casoFallido': ['']
    })
  }

}
