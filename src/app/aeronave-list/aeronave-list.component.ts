import { Component, OnInit } from '@angular/core';
import { AeronaveService } from '../aeronave.service';
import { Aeronave } from '../aeronave';
import { Observable, Subject } from "rxjs";

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aeronave-list',
  templateUrl: './aeronave-list.component.html',
  styleUrls: ['./aeronave-list.component.css']
})
export class AeronaveListComponent implements OnInit {

  constructor(private aeronaveservice: AeronaveService) { }

  aeronavesArrayLastWeek: Aeronave[] = [];
  aeronavesArrayFabricantes: Observable<Aeronave[]>;
  aeronavesArrayNotSoulds: Observable<Aeronave[]>;
  aeronavesArrayUpd: Aeronave[] = [];
  aeronavesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  countLastWeek: number;

  aeronaves: Observable<Aeronave[]>;
  aeronave: Aeronave = new Aeronave();
  deleteMessage = false;
  aeronavelist: Observable<Aeronave[]>;
  isupdated = false;

  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.aeronaveservice.getAeronaveList().subscribe(data => {
      this.aeronaves = data.content;
      console.log(this.aeronaves);

      this.dtTrigger.next();

      this.loadInfoAeronaves();

    })
  }

  deleteAeronave(id: number) {
    this.aeronaveservice.deleteAeronave(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.aeronaveservice.getAeronaveList().subscribe(data => {
            this.aeronaves = data.content

            this.loadInfoAeronaves();
          })
        },
        error => console.log(error));
  }

  updateAeronave(id: number) {
    this.aeronaveservice.getAeronave(id)
      .subscribe(
        data => {
          var a = new Aeronave();
          a.id = data["id"];
          a.nome = data["nome"];
          a.ano = data["ano"];
          a.descricao = data["descricao"];
          a.marca = data["marca"];
          a.vendido = data["vendido"];

          this.aeronavesArrayUpd.push(a);
        },
        error => console.log(error));
  }

  aeronaveupdateform = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    marca: new FormControl(),
    ano: new FormControl(),
    descricao: new FormControl(),
    vendido: new FormControl()
  });

  updateStu(updstu) {
    this.aeronave = new Aeronave();
    this.aeronave.id = this.AeronaveId.value;
    this.aeronave.nome = this.AeronaveNome.value;
    this.aeronave.marca = this.AeronaveMarca.value;
    this.aeronave.ano = this.AeronaveAno.value;
    this.aeronave.descricao = this.AeronaveDescricao.value;
    this.aeronave.vendido = this.AeronaveVendido.value;

    this.aeronaveservice.updateAeronave(this.aeronave.id, this.aeronave).subscribe(
      data => {
        this.isupdated = true;
        this.aeronaveservice.getAeronaveList().subscribe(data => {
          this.aeronaves = data.content;
          this.aeronavesArrayUpd = [];

          this.loadInfoAeronaves();
        })
      },
      error => console.log(error));
  }

  loadInfoAeronaves() {
    this.aeronaveservice.getAeronaveListLastWeek().subscribe(data => {
      this.aeronavesArrayLastWeek = data;
    })

    this.aeronaveservice.getAeronaveListGroupByFabricante().subscribe(data => {
      this.aeronavesArrayFabricantes = data;
    })

    this.aeronaveservice.getAeronaveListAeronaveNotSoulds().subscribe(data => {
      this.aeronavesArrayNotSoulds = data;
    })
  }

  get AeronaveNome() {
    return this.aeronaveupdateform.get('nome');
  }

  get AeronaveMarca() {
    return this.aeronaveupdateform.get('marca');
  }

  get AeronaveAno() {
    return this.aeronaveupdateform.get('ano');
  }

  get AeronaveId() {
    return this.aeronaveupdateform.get('id');
  }

  get AeronaveDescricao() {
    return this.aeronaveupdateform.get('descricao');
  }

  get AeronaveVendido() {
    return this.aeronaveupdateform.get('vendido');
  }

  changeisUpdate() {
    this.isupdated = false;
    this.aeronavesArrayUpd = [];
  }
}
