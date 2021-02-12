var sass = require('node-sass');

describe('-----VARIABLES TEST', ()=>{
    test('Variables snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './1_helpers/variables';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
})

describe('-----GENERICS TEST', ()=>{
  test('Generics snapshot', async () => {

      var result = sass.renderSync({
        data: `
        @import './2_base/generics';
        `,
        outputStyle: 'nested'
      });
      
      expect(result.css.toString()).toMatchSnapshot();
    });
})