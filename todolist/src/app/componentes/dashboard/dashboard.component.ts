import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/serviços/tarefa.service';
import { Tarefa } from 'src/app/modelo/Tarefa';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tarefas: Tarefa[] = [];
  tarefasEmExecucao: Tarefa[] = [];
  tarefasConcluidas: Tarefa[] = [];
  tarefasPausadas: Tarefa[] = [];

  constructor(private service: TarefaService) {}

  ngOnInit(): void {
    this.service.getTarefas().subscribe(data => {
      this.tarefas = data;
      this.atualizarTarefas();
    });
  }

  private atualizarTarefas() {
    this.tarefasEmExecucao = this.tarefas.filter(tarefa => tarefa.status === 'Em execução');
    this.tarefasConcluidas = this.tarefas.filter(tarefa => tarefa.status === 'Concluída');
    this.tarefasPausadas = this.tarefas.filter(tarefa => tarefa.status === 'Pausada');
  }
}
