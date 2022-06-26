import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-redirecionamento',
  templateUrl: './redirecionamento.component.html',
  styleUrls: ['./redirecionamento.component.scss'],
})
export class RedirecionamentoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  realdollar: any;
  realiene: any;
  realeuro: any;
  reallibra: any;
  realpeso: any;
  converterealdolar: number | undefined;
  converterealiene: number | undefined;
  converterealeuro: number | undefined;
  convertereallibra: number | undefined;
  converterealpeso: number | undefined;

  converterrealdollar(): any {
    console.log(this.realdollar);
    let real = this.realdollar;
    this.converterealdolar = Math.round(real / 5.3);

    return this.converterealdolar;
  }

  converterrealiene(): any {
    let real2 = this.realiene;
    this.converterealiene = Math.round(real2 * 25.78);
    return this.converterealiene;
  }

  converterrealeuro(): any {
    let real3 = this.realeuro;
    this.converterealeuro = Math.round(real3 / 5.54);
    return this.converterealeuro;
  }

  converterreallibra(): any {
    let real4 = this.reallibra;
    this.convertereallibra = Math.round(real4 / 6.43);

    return this.convertereallibra;
  }

  converterrealpeso(): any {
    let real5 = this.realpeso;
    this.converterealpeso = Math.round(real5 * 23.7);
    return this.converterealpeso;
  }
}
