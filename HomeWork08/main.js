let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step++;
        return this;
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step--;
        return this;
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.step)
        return this;
    }
  };
  
  ladder.down().down().up().down().up().up().showStep().down().showStep().up();