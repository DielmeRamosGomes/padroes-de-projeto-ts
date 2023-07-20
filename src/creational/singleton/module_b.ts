import { MyDataBaseClassic } from './db/mydatabase-classic';
import './module_a';

const myDataBaseClassic = MyDataBaseClassic.getInstance();
myDataBaseClassic.add({ name: 'Ana', age: 29 });
myDataBaseClassic.add({ name: 'Joseph', age: 31 });
myDataBaseClassic.add({ name: 'Amaral', age: 62 });
myDataBaseClassic.add({ name: 'Carlos', age: 58 });
myDataBaseClassic.show();

