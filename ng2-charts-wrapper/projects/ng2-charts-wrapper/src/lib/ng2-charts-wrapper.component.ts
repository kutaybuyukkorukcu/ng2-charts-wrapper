import { Component, Input, OnInit } from '@angular/core';
import { ChartWrapperComponent } from './chart-wrapper.component';

@Component({
  selector: 'lib-ng2-charts-wrapper',
  template: `
    <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div class="bg-gray-800 text-gray-500 rounded shadow-xl py-5 px-5 w-full lg:w-1/2">
          <div class="flex flex-wrap items-end">
              <div class="flex-1">
                  <h3 class="text-lg font-semibold leading-tight">Title</h3>
              </div>
              <div class="relative" (click)="mock()">
                  <button class="text-xs hover:text-gray-300 h-6 focus:outline-none" (click)="mock()">
                      <span x-text="chartData.options[chartData.selectedOption].label"></span><i class="ml-1 mdi mdi-chevron-down"></i>
                  </button>
                  <!-- x-transition:enter="transition ease duration-300 transform" x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease duration-300 transform" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-4" -->
                  <div class="bg-gray-700 shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-1 -mr-3" style="display: none;">
                      <span class="absolute top-0 right-0 w-3 h-3 bg-gray-700 transform rotate-45 -mt-1 mr-3"></span>
                      <div class="bg-gray-700 rounded w-full relative z-10 py-1">
                          <ul class="list-reset text-xs">
                              <!-- <template x-for="(item,index) in chartData.options">
                                  <li class="px-4 py-2 hover:bg-gray-600 hover:text-white transition-colors duration-100 cursor-pointer" [ngClass]="{'text-white': index == chartData.selectedOption}" (click)="mock()">
                                      <span x-text="item.label"></span>
                                  </li>
                              </template> -->
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div class="table-wrapper">
              
          </div>
      </div>
    </div>
  `,
  styles: [
    './styles.scss'
  ]
})
export class Ng2ChartsWrapperComponent implements OnInit {

  @Input() chartWrapper!: ChartWrapperComponent;

  @Input() title!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
