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
  casoExito = 0
  casoFallido = 0

  dx1 = 0;
  py2 = 0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculoPage');
  }

  crearForm() {
    return this.formBuilder.group({
      'c11': [''],
      'c12': [''],
      'py1': [''],
      'estudioMercado': [''],
      'casoExito': [''],
      'casoFallido': ['']
    })
  }

  calcular() {
    this.c11 = parseFloat(this.calculoForm.value['c11']);
    this.c12 = parseFloat(this.calculoForm.value['c12']);
    this.py1 = parseFloat(this.calculoForm.value['py1']);
    this.estudioMercado = parseFloat(this.calculoForm.value['estudioMercado']);
    this.casoExito = parseFloat(this.calculoForm.value['casoExito']);
    this.casoFallido = parseFloat(this.calculoForm.value['casoFallido']);

    this.py2 = (1 - this.py1);
    this.dx1 = 0;
    console.log(this.py2);
    this.dx1 = (this.c11 * (this.py1) + (this.c12) * this.py2);
    console.log(this.dx1);
  }

}
