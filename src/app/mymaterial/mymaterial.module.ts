import { NgModule } from '@angular/core';

import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatButtonModule ,} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

import {MatNativeDateModule} from '@angular/material/core';  
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from  '@angular/material/input';
import {MatProgressSpinnerModule}  from '@angular/material/progress-spinner';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';

@NgModule({ 
    imports: [
        MatButtonModule,  MatMenuModule, MatSidenavModule, MatPaginatorModule,MatDatepickerModule,MatToolbarModule, MatIconModule,MatListModule,
        MatRadioModule,MatSelectModule,MatSliderModule,MatDividerModule,MatNativeDateModule,MatSnackBarModule,MatDialogModule,MatTableModule,
        MatSortModule,MatTabsModule,MatCheckboxModule,MatInputModule,MatCardModule,MatProgressSpinnerModule,],
    exports: [
        MatButtonModule,  MatMenuModule, MatSidenavModule, MatPaginatorModule,MatDatepickerModule,MatToolbarModule, MatIconModule,MatListModule,
        MatRadioModule,MatSelectModule,MatSliderModule,MatDividerModule,MatNativeDateModule,MatSnackBarModule,MatDialogModule,MatTableModule,
        MatSortModule,MatTabsModule,MatCheckboxModule,MatInputModule,MatCardModule,MatProgressSpinnerModule,],
    
    })
export class MymaterialModule { } 
