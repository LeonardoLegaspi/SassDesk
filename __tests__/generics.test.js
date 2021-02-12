var sass = require('node-sass');

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