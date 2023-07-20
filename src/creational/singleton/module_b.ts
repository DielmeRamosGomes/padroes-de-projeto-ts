import { MyDataBaseModule } from './db/my-database-module';
import './module_a';

const myDataBaseClassic = MyDataBaseModule;
myDataBaseClassic.add({ name: 'Ana', age: 29 });
myDataBaseClassic.add({ name: 'Joseph', age: 31 });
myDataBaseClassic.add({ name: 'Amaral', age: 62 });
myDataBaseClassic.add({ name: 'Carlos', age: 58 });
myDataBaseClassic.show();

