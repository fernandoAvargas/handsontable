import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const container = document.querySelector('#example2');
const hot = new Handsontable(container, {
  data: [
    { car: 'Tesla', year: 2017, chassis: 'black', bumper: 'black' },
    { car: 'Nissan', year: 2018, chassis: 'blue', bumper: 'blue' },
    { car: 'Chrysler', year: 2019, chassis: 'yellow', bumper: 'black' },
    { car: 'Volvo', year: 2020, chassis: 'white', bumper: 'gray' }
  ],
  colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

hot.updateSettings({
  cells(row, col) {
    const cellProperties = {};

    if (hot.getData()[row][col] === 'Nissan') {
      cellProperties.readOnly = true;
    }

    return cellProperties;
  }
});
