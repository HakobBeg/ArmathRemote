import {Component, OnInit} from '@angular/core';
import {ProblemsService} from '../../services/problems/problems.service';
import {Problem} from '../../Models/problemModel';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  problems: Problem[] = [];

  constructor(private probSv: ProblemsService) {
  }

  ngOnInit(): void {

    this.probSv.getProblems().subscribe((probs) => {
      this.problems = probs;

      this.problems.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;


      });
    });

  }

}
