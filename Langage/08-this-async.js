const contactES3 = {
  prenom: 'Romain',
  helloAsync: function() {
    const that = this;
    setTimeout(function() {
      console.log(`Bonjour je m'appelle ${that.prenom}`);
    }, 1000);
  }
}

contactES3.helloAsync();

const contactES5 = {
  prenom: 'Romain',
  hello: function() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  },
  helloAsyncWithNamedCb: function() {
    setTimeout(this.hello.bind(this), 1000);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }.bind(this), 1000);
  }
}

contactES5.helloAsync();
contactES5.helloAsyncWithNamedCb();

const contactES6 = {
  prenom: 'Romain',
  helloAsync: function() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000);
  }
}

contactES6.helloAsync();
