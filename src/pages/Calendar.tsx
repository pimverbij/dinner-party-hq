
import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";

const dinners = [
  {
    id: 1,
    title: 'Italian Night',
    date: new Date(2025, 4, 5), // May 5, 2025
    guests: ['Sarah', 'Tom']
  },
  {
    id: 2,
    title: 'BBQ at the Park',
    date: new Date(2025, 4, 12), // May 12, 2025
    guests: ['Mike', 'Emma']
  },
  {
    id: 3,
    title: 'Sushi Night',
    date: new Date(2025, 4, 20), // May 20, 2025
    guests: ['Amy', 'David']
  }
];

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const selectedDayDinners = dinners.filter(dinner => 
    date && dinner.date.toDateString() === date.toDateString()
  );

  return (
    <div className="h-[calc(100vh-4rem)] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            View and manage your dinner schedule.
          </p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px] overflow-hidden">
        <Card className="flex-1">
          <CardHeader className="border-b p-3">
            <CardTitle className="text-base font-medium">Dinner Calendar</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full rounded-none border-0"
              modifiers={{
                dinner: dinners.map(dinner => dinner.date)
              }}
              modifiersStyles={{
                dinner: {
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                }
              }}
              styles={{
                months: { width: '100%' },
                month: { width: '100%' },
                table: { width: '100%' },
                head_cell: { width: '14.28%' },
                cell: { width: '14.28%' }
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {date ? date.toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Select a date'}
            </CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {selectedDayDinners.length > 0 ? (
              <div className="space-y-4">
                {selectedDayDinners.map(dinner => (
                  <div key={dinner.id} className="space-y-2">
                    <h3 className="font-medium">{dinner.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Guests: {dinner.guests.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No dinners scheduled for this date.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarPage;
