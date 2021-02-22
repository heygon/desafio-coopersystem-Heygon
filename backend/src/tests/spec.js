describe('Inicindo testes do sistema', function() {
    it('Login', function() {
      browser.get('http://localhost:3000/users/login');
      
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
  
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
          toEqual('5'); // This is wrong!
    });
});