import "./index.css";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  Inject,
  Resize,
} from "@syncfusion/ej2-react-schedule";

function App() {
  const data: object[] = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2022, 8, 7, 5, 0),
      EndTime: new Date(2022, 8, 7, 5, 30),
      IsAllDay: false,
    },
  ];

  console.log(data);

  return (
    <div className="App">
      <ScheduleComponent
        selectedDate={new Date()}
        eventSettings={{ dataSource: data }}
      >
        <ViewsDirective>
          <ViewDirective
            option="Day"
            timeScale={{ enable: true, interval: 15, slotCount: 1 }}
            
          />
          <ViewDirective option="Week" 
          />
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Resize]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
