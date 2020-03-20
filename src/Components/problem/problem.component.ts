import {Component, Input, OnInit} from '@angular/core';
import {Problem} from '../../Models/problemModel';
import {showAnimation} from '../../Animations/simpleAnimations';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css'],
  animations: [showAnimation]
})
export class ProblemComponent implements OnInit {

  @Input() problem: Problem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
