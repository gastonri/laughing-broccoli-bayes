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
  templateUrl: 'calculo.html'
})
export class CalculoPage {

  calculoForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.calculoForm = this.crearForm();
  }

  c11 = 0;
  c12 = 0;
  py1 = 0;
  estudioMercado = 0;

  dx1 = 0;
  py2 = 0;

  // Variables cuadro B
  b1t1y1 = 0;
  b1t1y2 = 0;
  b1t2y1 = 0;
  b1t2y2 = 0;

  // Variables cuadro B
  b2t1y1 = 0;
  b2t1y2 = 0;
  b2t2y1 = 0;
  b2t2y2 = 0;
  b2y1 = 0;
  b2y2 = 0;
  b2t1 = 0;
  b2t2 = 0;

  // Variables cuadro B
  b3t1y1 = 0;
  b3t1y2 = 0;
  b3t2y1 = 0;
  b3t2y2 = 0;
  b3t1 = 0;
  b3t2 = 0;

  // Cuadro 4
  t1dx1 = 0;
  t2dx1 = 0;
  t1dopt = 0;
  t2dopt = 0;

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
    });
  }

  calcular() {
    this.c11 = parseFloat(this.calculoForm.value['c11']);
    this.c12 = parseFloat(this.calculoForm.value['c12']);
    this.py1 = parseFloat(this.calculoForm.value['py1']);
    this.estudioMercado = parseFloat(this.calculoForm.value['estudioMercado']);
    this.b1t1y1 = parseFloat(this.calculoForm.value['t11']);
    this.b1t2y2 = parseFloat(this.calculoForm.value['t22']);

    // Cuadro A
    this.py2 = parseFloat(Number(1 - this.py1).toFixed(2));
    this.dx1 = 0;
    this.dx1 = parseFloat(Number(this.c11 * ( this.py1 ) + ( this.c12 ) * this.py2).toFixed(2));

    // Cuadro B1
    this.b1t1y2 = 1 - this.b1t2y2;

    this.b1t2y1 = 1 - this.b1t1y1;

    this.b1t1y2 = parseFloat(Number(this.b1t1y2).toFixed(2));
    this.b1t2y1 = parseFloat(Number(this.b1t2y1).toFixed(2));

    // Cuadro B2
    this.b2t1y1 = parseFloat(Number(this.b1t1y1 * this.py1).toFixed(3));
    this.b2t1y2 = parseFloat(Number(this.b1t1y2 * this.py2).toFixed(3));

    this.b2t2y1 = parseFloat(Number(this.b1t2y1 * this.py1).toFixed(3));
    this.b2t2y2 = parseFloat(Number(this.b1t2y2 * this.py2).toFixed(3));

    this.b2y1 = parseFloat(Number(this.b2t1y1 + this.b2t2y1).toFixed(3));
    this.b2y2 = parseFloat(Number(this.b2t1y2 + this.b2t2y2).toFixed(3));
    this.b2t1 = parseFloat(Number(this.b2t1y1 + this.b2t1y2).toFixed(3));
    this.b2t2 = parseFloat(Number(this.b2t2y1 + this.b2t2y2).toFixed(3));

    // Cuadro 3
    this.b3t1y1 = parseFloat(Number(this.b2t1y1 / this.b2t1).toFixed(3));
    this.b3t1y2 = parseFloat(Number(1 - this.b3t1y1).toFixed(3));
    this.b3t2y1 = parseFloat(Number(this.b2t2y1 / this.b2t2).toFixed(3));
    this.b3t2y2 = parseFloat(Number(1 - this.b3t2y1).toFixed(3));
    this.b3t1 = parseFloat(Number(this.b3t1y1 + this.b3t1y2).toFixed(2));
    this.b3t2 = parseFloat(Number(this.b3t2y1 + this.b3t2y2).toFixed(2));

    // B4
    this.t1dx1 = ( ( this.c11 * this.b3t1y1 ) + ( ( this.c12 ) * this.b3t1y2 ) ) - this.estudioMercado;
    this.t2dx1 = ( ( this.c11 * this.b3t2y1 ) + ( this.c12 * this.b3t2y2 ) ) - this.estudioMercado;
  }

  calculard1opt() {
    if ( this.t1dx1 > this.estudioMercado ) {
      this.t1dopt = this.t1dx1;
    } else {
      this.t1dopt = this.estudioMercado;
    }
    return parseFloat(Number(this.t1dopt).toFixed(2));
  }

  calculard2opt() {
    if ( this.t2dx1 > this.estudioMercado ) {
      this.t2dopt = this.t2dx1;
    } else {
      this.t2dopt = this.estudioMercado;
    }
    return parseFloat(Number(this.t2dopt).toFixed(2));
  }

  calcularFinal() {
    return ( this.calculard1opt() * this.b2t1 ) + ( ( this.calculard2opt() ) * this.b2t2 );
  }

  resultadoFinal() {
    let mensajeFinal = '';
    if ( this.calcularFinal() > this.dx1 ) {
      mensajeFinal = 'A la empresa le resulta conveniente tomar la decisión luego de realizar el estudio de mercado.';
    } else {
      mensajeFinal = 'A la empresa le resulta conveniente tomar la decisión SIN realizar el estudio de mercado.';
    }
    return mensajeFinal;
  }
}
