import { DatePipe } from '@angular/common';
import { DataTableColumn } from '../data-table.component';

export const COLUMN_CREATED_AT: DataTableColumn = {
    data: 'createdAt',
    name: 'Data de Cadastro',
    pipe: new DatePipe('en'),
    pipeArgs: 'dd/MM/yyyy HH:mm'
  };

