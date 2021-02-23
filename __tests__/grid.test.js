var sass = require('node-sass');

describe('-----GRID TEST', ()=>{
    test('Grid snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './2_base/grid';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })