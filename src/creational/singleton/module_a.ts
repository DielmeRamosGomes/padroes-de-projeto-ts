import { MyDataBaseClassic } from './db/mydatabase-classic';

const myDataBaseClassic = MyDataBaseClassic.getInstance();
myDataBaseClassic.add({ name: 'Dielme', age: 29 });
myDataBaseClassic.add({ name: 'Paulo', age: 31 });
myDataBaseClassic.add({ name: 'Sebastian', age: 62 });
myDataBaseClassic.add({ name: 'Edi', age: 58 });

