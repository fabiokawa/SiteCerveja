import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.css']
})
export class SugestoesComponent implements OnInit {
  selectedEscolha: string = '';
  escolhas: any = [
    'Coloração',
    'Região',
    'Teor Alcoólico',
    'Sabor sobresalente',
    'Combinação de comidas'
  ];

  selectedCor: string = '';
  cores: any = [
    'Claro',
    'Médio',
    'Escuro'
  ];

  selectedOrigem: string = '';
  origens: any = [
    'Alemanha',
    'EUA',
    'Irlanda'
  ];

  selectedTeor: string = '';
  teores: any = [
    'Menor',
    'Médio',
    'Alto'
  ];

  selectedSabor: string = '';
  sabores: any = [
    'Amargo',
    'Ácido',
    'Suave'
  ];

  selectedComida: string = '';
  comidas: any = [
    'Aperitivos',
    'Sobremesa',
    'Saladas'
  ];

  radioChangeHandler (event: any){
    this.selectedEscolha = event.target.value;
  }

  radioChangeHandler1 (event: any){
    this.selectedCor = event.target.value;
    if (this.selectedCor == 'Claro'){
      this.selectedCor = 'Weiss';
    }
    if (this.selectedCor == 'Médio'){
      this.selectedCor = 'Blond Ale ou Ipa Cacau';
    }
    if (this.selectedCor == 'Escuro'){
      this.selectedCor = 'Oatmeal Stout';
    }
  }

  radioChangeHandler2 (event: any){
    this.selectedOrigem = event.target.value;
    if (this.selectedOrigem == 'Alemanha'){
      this.selectedOrigem = 'Weiss';
    }
    if (this.selectedOrigem == 'EUA'){
      this.selectedOrigem = 'Blond Ale ou Ipa Cacau';
    }
    if (this.selectedOrigem == 'Irlanda'){
      this.selectedOrigem = 'Oatmeal Stout';
    }
  }

  radioChangeHandler3 (event: any){
    this.selectedTeor = event.target.value;
    if (this.selectedTeor == 'Menor'){
      this.selectedTeor = 'Oatmeal Stout';
    }
    if (this.selectedTeor == 'Médio'){
      this.selectedTeor = 'Blond Ale ou Weiss';
    }
    if (this.selectedTeor == 'Alto'){
      this.selectedTeor = 'Ipa Cacau';
    }
  }

  radioChangeHandler4 (event: any){
    this.selectedSabor = event.target.value;
    if (this.selectedSabor == 'Amargo'){
      this.selectedSabor = 'Oatmeal Stout';
    }
    if (this.selectedSabor == 'Ácido'){
      this.selectedSabor = 'Blond Ale ou Ipa Cacau';
    }
    if (this.selectedSabor == 'Suave'){
      this.selectedSabor = 'Weiss';
    }
  }

  radioChangeHandler5 (event: any){
    this.selectedComida = event.target.value;
    if (this.selectedComida == 'Aperitivos'){
      this.selectedComida = 'Weiss ou Oatmeal Stout';
    }
    if (this.selectedComida == 'Sobremesa'){
      this.selectedComida = 'Oatmeal Stout';
    }
    if (this.selectedComida == 'Saladas'){
      this.selectedComida = 'Ipa Cacau';
    }
  }


  private selectedLink: string="";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  
  


  constructor() { }

  ngOnInit(): void {
  }

}
