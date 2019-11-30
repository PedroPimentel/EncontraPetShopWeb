import { Component } from '@angular/core';
import { ServiceService } from './servicos/service.service';
import { Entrada } from './entidades/entrada';
import { Saida } from './entidades/saida';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encontrar canil';

  entrada: Entrada;
  saida: Saida;
  status: boolean = false;
  formPetShop: FormGroup;

  constructor(private serviceService: ServiceService){}

  ngOnInit(){

    this.entrada = new Entrada();

    this.formPetShop = new FormGroup({
      dataBanho: new FormControl('', Validators.required),
      qtdCaesGrandes: new FormControl('', Validators.required),
      qtdCaesPequenos: new FormControl('', Validators.required),
    })

    this.visualizar();
  }

  calcular(){
    this.serviceService.encontrarMelhorOpcao(this.entrada)
      .subscribe((response: any) => {
        if(response.message == "200 OK"){
          this.status = true;
          this.saida = response.saida;
        }
        else{
          alert("Falha de comunicação com o servidor")
        }
      })
  }

  visualizar(){
    console.log(this.formPetShop);
  }

  limpar(){
     this.entrada = new Entrada();
     this.status = false;   
  }
}
