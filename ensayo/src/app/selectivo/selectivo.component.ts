import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './app.service';

@Component({
  selector: 'app-selectivo',
  standalone: true,
  imports: [],
  templateUrl: './selectivo.component.html',
  styleUrl: './selectivo.component.css'
})
export class SelectivoComponent implements OnInit {
  options: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOptions().subscribe((data: any[]) => {
      this.options = data;
    });
  }
