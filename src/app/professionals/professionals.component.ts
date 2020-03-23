import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Professional} from '../shared/models/professional.model';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ProfessionalsService} from '../shared/http/professionals.service';
import {CollectionViewer} from '@angular/cdk/collections';
import {HttpResourceResponse} from '../shared/models/http-resource-response.model';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {AddUpdateProfessionalComponent} from './add-update-professional/add-update-professional.component';

export class ProfessionalsDataSource implements DataSource<Professional> {

  private professionalsSubject = new BehaviorSubject<Professional[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);
  public loading$ = this.loadingSubject.asObservable();
  public totalElements;
  public professionalColumns = {
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    service: 'service',
    country: 'country',
    state: 'state',
    county: 'county',
    municipality: 'municipality'
  };

  constructor(private professionalService: ProfessionalsService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Professional[]> {
    return this.professionalsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.professionalsSubject.complete();
    this.loadingSubject.complete();
  }

  public init(paginator: MatPaginator, sorter: MatSort, searchBox: ElementRef) {
    this.load(paginator, sorter, searchBox);
  }

  public load(paginator: MatPaginator, sorter: MatSort, searchBox: ElementRef) {
    this.loadingSubject.next(true);
    const column = (sorter.active) ? sorter.active : '';
    const direction = (sorter.direction === 'desc') ? '-' : '';
    const filter = (searchBox.nativeElement.value && searchBox.nativeElement.value.length > 2) ? searchBox.nativeElement.value : null;
    this.professionalService.find(paginator.pageIndex, paginator.pageSize, direction + column, filter)
      .subscribe((professionals: HttpResourceResponse<Professional>) => {
        this.totalElements = professionals.totalElements;
        this.professionalsSubject.next(professionals.elements);
      }, () => {
      }, () => {
        this.loadingSubject.next(false);
      });
  }
}

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sorter: MatSort;
  @ViewChild('input') searchBox: ElementRef;
  dataSource: ProfessionalsDataSource;
  Object = Object;

  constructor(private professionalService: ProfessionalsService,
              public dialog: MatDialog) {
    this.dataSource = new ProfessionalsDataSource(professionalService);
  }

  ngAfterViewInit(): void {
    this.dataSource.init(this.paginator, this.sorter, this.searchBox);
    this.paginator.page.subscribe(() => {
      this.dataSource.load(this.paginator, this.sorter, this.searchBox);
    });
    this.sorter && this.sorter.sortChange.subscribe(() => {
      this.dataSource.load(this.paginator, this.sorter, this.searchBox);
    });
    fromEvent(this.searchBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        map((nativeElement: any) => {
          if (nativeElement.value && nativeElement.value.length > 2) {
            return nativeElement;
          }
        }),
        tap(() => {
          this.dataSource.load(this.paginator, this.sorter, this.searchBox);
        })).subscribe();
  }

  addProfessional(): void {
    const dialogRef = this.dialog.open(AddUpdateProfessionalComponent, {
      height: '60%',
      width: '70%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  edit(id: any) {
    const dialogRef = this.dialog.open(AddUpdateProfessionalComponent, id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  delete(professional: any) {

  }


}
