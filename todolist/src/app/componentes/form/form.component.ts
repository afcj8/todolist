import { Component, Output, EventEmitter } from '@angular/core';
import { TarefaService } from 'src/app/serviços/tarefa.service';
import { Tarefa } from 'src/app/modelo/Tarefa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() carregar = new EventEmitter() 

  tarefas: Tarefa[] = [];

  tarefa : Tarefa = {id: 0, nome: '', data: new Date('01/12/2023'), status: 'Em execução' };

  constructor(private service: TarefaService) {}

  adicionar(meuform : NgForm) {
    this.tarefa.nome = meuform.value.nome;
    this.tarefa.data = meuform.value.data;
    this.service.adicionarTarefa(this.tarefa).subscribe(data => {
      console.log(data);
      this.tarefas.push(data);
      this.carregar.emit()
    });
    meuform.reset()
  }
}