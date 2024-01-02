import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-charttask',
  templateUrl: './charttask.component.html',
  styleUrls: ['./charttask.component.css']
})
export class CharttaskComponent implements OnInit {
  chartOptions:  any = {};
  data:any;
  tasksDueInNext7Days: number = 0;
  tasksDueDates: { date: Date, taskId: number }[] = []; // Updated type to include task ID
  upcomingDatesChartOptions: any; // New chart options for upcoming dates

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.allTasks();
  }

  allTasks() {
    this.taskService.getTasks().subscribe((response: any) => {
      this.tasksDueDates = [];
      this.data = response;

      this.processData();
      this.chartOptions = {
        chart: {
          type: 'bar',
          height: 200
        },
        series: [
          {
            name: 'Total Task Dues in Next 7 Days',
            data: [this.tasksDueInNext7Days],
            color: '#023020',
          },
        ],
        xaxis: {
          categories: ['Total Task Dues in Next 7 Days'],
        },
      };
      
      this.createUpcomingDatesChart();
    });
  }

  processData() {
    const currentDate = new Date();
    this.tasksDueInNext7Days = this.data.filter((task: any) => {
      const dueDate = new Date(task.dueDate);
      const timeDiff = dueDate.getTime() - currentDate.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      if (daysDiff <= 7 && daysDiff >= 0) {
        this.tasksDueDates.push({ date: dueDate, taskId: task.id });
        return true;
      }
      return false;
    }).length;
  }

  createUpcomingDatesChart() {
    const upcomingDates = this.generateUpcomingDates();
    const dataForChart = upcomingDates.map(date => {
      const tasksForDate = this.tasksDueDates.filter(taskDate => taskDate.date.toDateString() === date.toDateString());
      return tasksForDate.length;
    });

    this.upcomingDatesChartOptions = {
      chart: {
        type: 'bar',
        height:350
       
      },
      series: [
        {
          name: 'Task Due in This Date',
          data: dataForChart,
          color:"#702963"
        },
      ],
      xaxis: {
        categories: upcomingDates.map(date => date.toDateString()),
      },
    };
  }

  generateUpcomingDates(): Date[] {
    const currentDate = new Date();
    const upcomingDates = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      upcomingDates.push(date);
    }
    return upcomingDates;
  }
}
