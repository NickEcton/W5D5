class Clock {
  constructor() {
    let my_date = new Date();

    this.hours = my_date.getHours();
    this.minutes = my_date.getMinutes();
    this.seconds = my_date.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
    }

    // this.printTime(stringify(hours),stringify(minutes),stringify(seconds));

    // let that = this;

    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
  }

  _tick() {
    this.incrementSeconds();
    this.printTime();

    // const that = this;
    // const callback = function(that) {
    //   that.printTime();
    // };
    //
    // setTimeout(callback, 1000);
    //
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }

  incrementSeconds() {
    this.seconds += 1;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.incrementMinutes();
    }

  }

  incrementMinutes() {
    this.minutes += 1;

    if (this.minutes === 60) {
      this.minutes = 0;
      this.incrementHours();
    }
  }


  incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}



const clock = new Clock();

// clock.printTime(11,22,33)
