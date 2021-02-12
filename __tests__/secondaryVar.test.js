var sass = require('node-sass');

describe('-----SECONDARY VARIABLES TEST', ()=>{
    test('Secondary Variables snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './1_helpers/secondary_variables';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })