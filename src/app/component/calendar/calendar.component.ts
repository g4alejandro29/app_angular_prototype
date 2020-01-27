import {Component, ChangeDetectionStrategy, ViewChild, OnInit} from '@angular/core';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {EventInput, OptionsInput} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})


export class CalendarComponent implements OnInit {
  calendarOptions: OptionsInput;
  events: Array<object> = [
    {title: 'event 1', date: '2019-10-14'},
    {title: 'event 2', date: '2019-10-14'},
    {title: 'event 3', date: '2019-10-14'},
    {title: 'event 4', date: '2019-10-14'},
    {title: 'event 7', date: '2019-10-14'},
    {title: 'event 8', date: '2019-10-14'},
    {title: 'event 9', date: '2019-10-14'},
    {title: 'event 10', date: '2019-10-14'},
    {title: 'event 11', date: '2019-10-13'}
  ];
  @ViewChild('fullcalendar', {static: false}) fullcalendar: FullCalendarComponent;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    {title: 'Event Now', start: new Date()}
  ];

  selectedDate(event) {
    console.log(event);
  }

  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }

  eventClick(model) {
    console.log(model);
  }

  eventDragStop(model) {
    console.log(model);
  }

  dayRender(ev) {
    ev.el.addEventListener('dblclick', () => {
      alert('double click!');
    });
  }

  updateHeader() {
    this.calendarOptions.header = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }

  updateEvents() {
    this.events = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function() {
            alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      columnHeaderHtml: () => {
        return '<b>Friday!</b>';
      },
      // add other plugins
      plugins: [dayGridPlugin, interactionPlugin, timeGrigPlugin, resourceTimeGridPlugin]
    };
  }

}
