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

  calculoForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.calculoForm = this.crearForm();
  }

  c11 = 0
  c12 = 0
  py1 = 0
  estudioMercado = 0

  dx1 = 0;
  py2 = 0;

  //Variables cuadro B
  t11 = 0
  t12 = 0
  t21 = 0
  t22 = 0



  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculoPage');
  }

  crearForm() {
    return this.formBuilder.group({
      'c11': [''],
      'c12': [''],
      'py1': [''],
      'estudioMercado': [''],
      't11': [''],
      't22': ['']
    })
  }

  calcular() {
    this.c11 = parseFloat(this.calculoForm.value['c11']);
    this.c12 = parseFloat(this.calculoForm.value['c12']);
    this.py1 = parseFloat(this.calculoForm.value['py1']);
    this.estudioMercado = parseFloat(this.calculoForm.value['estudioMercado']);
    this.t11 = parseFloat(this.calculoForm.value['t11']);
    this.t22 = parseFloat(this.calculoForm.value['t22']);

    //Cuadro A
    this.py2 = (1 - this.py1);
    this.dx1 = 0;
    this.dx1 = (this.c11 * (this.py1) + (this.c12) * this.py2);

    //Cuadro B
    this.t12 = 1 - this.t11;
    this.t21 = 1 - this.t22;
    this.t12 = parseFloat(Number(this.t12).toFixed(2));
    this.t21 = parseFloat(Number(this.t21).toFixed(2));
  }

}
