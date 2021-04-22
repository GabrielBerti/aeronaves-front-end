import { Component, OnInit } from '@angular/core';
import { AeronaveService } from '../aeronave.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aeronave } from '../aeronave';
@Component({
  selector: 'app-add-aeronave',
  templateUrl: './add-aeronave.component.html',
  styleUrls: ['./add-aeronave.component.css']
})
export class AddAeronaveComponent implements OnInit {

  constructor(private aeronaveservice: AeronaveService) { }

  aeronave: Aeronave = new Aeronave();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  aeronavesaveform = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    ano: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    vendido: new FormControl('', [Validators.required]),
  });

  saveAeronave(saveAeronave) {
    this.aeronave = new Aeronave();
    this.aeronave.nome = this.AeronaveName.value;
    this.aeronave.marca = this.AeronaveMarca.value;
    this.aeronave.ano = this.AeronaveAno.value;
    this.aeronave.descricao = this.AeronaveDescricao.value;
    this.aeronave.vendido = this.AeronaveVendido.value;

    this.submitted = true;
    this.save();
  }

  save() {
    this.aeronaveservice.createAeronave(this.aeronave)
      .subscribe(data => console.log(data), error => console.log(error));
    this.aeronave = new Aeronave();
  }

  get AeronaveName() {
    return this.aeronavesaveform.get('nome');
  }

  get AeronaveMarca() {
    return this.aeronavesaveform.get('marca');
  }

  get AeronaveAno() {
    return this.aeronavesaveform.get('ano');
  }

  get AeronaveDescricao() {
    return this.aeronavesaveform.get('descricao');
  }

  get AeronaveVendido() {
    return this.aeronavesaveform.get('vendido');
  }

  addAeronaveForm() {
    this.submitted = false;
    this.aeronavesaveform.reset();
  }
}
