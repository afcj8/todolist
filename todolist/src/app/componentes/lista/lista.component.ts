import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/serviços/tarefa.service';
import { Tarefa } from 'src/app/modelo/Tarefa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private service: TarefaService) {}

  ngOnInit(): void {
    this.service.getTarefas().subscribe(data => {
      this.tarefas = data;
    })
  }  

  onClick() {
    this.service.getTarefas().subscribe(data => {
      this.tarefas = data;
    })
  }

  atualizar(tarefa: Tarefa, novoStatus: string) {
    if (novoStatus === 'Concluída' || novoStatus === 'Pausada') {
      tarefa.status = novoStatus;
      this.service.atualizarTarefa(tarefa).subscribe(data => {
        console.log('Tarefa atualizada com sucesso!');
      });
    } else {
      console.error('Status inválido');
    }
  }

  delete(tarefa: Tarefa) {
    if (tarefa && tarefa.id !== undefined) {
      const index = this.tarefas.indexOf(tarefa);
      if (index !== -1) {
        this.service.deletarTarefa(tarefa.id).subscribe(
          data => {
            this.tarefas.splice(index, 1);
            console.log("Tarefa deletada com sucesso!");
          },
          error => {
            console.error("Erro ao deletar tarefa:", error);
          }
        );
      }
    } else {
      console.error("Tarefa ou ID indefinido.");
    }
  }
}