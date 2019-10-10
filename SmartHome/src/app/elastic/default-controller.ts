import { DefaultBean } from './default-bean';
import { DefaultElasticService } from './../services/default.service';
import { MatDialog } from '@angular/material/dialog';

export class DefaultController {

  constructor(protected defaultElasticService: DefaultElasticService,
    public dialog: MatDialog) {

  }

  data: DefaultBean[];

  getAll() {
    this.defaultElasticService.getAll().subscribe(
      (result: any) => {
        this.data = result.hits.hits;
        console.log(result.hits.hits);
      }
    );
  }

  remove(defaultBean: DefaultBean) {
    if (defaultBean) {
      this.defaultElasticService.remove(defaultBean).subscribe(
        (sresult: any) => {
          this.getAll();
        }
      );
    }
  }
}
