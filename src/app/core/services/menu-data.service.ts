import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuData, MenuGroup, MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  /**
   * Get menu data structure
   * This can be replaced with API call later
   */
  getMenuData(): Observable<MenuData> {
    const menuData: MenuData = {
      personal: [
        {
          groupName: 'Employee Self Service',
          items: [
            { name: 'การลงเวลา (Time Attendance)', icon: 'access_time', route: '/portal/self-service/attendance' },
            { name: 'การขอเอกสาร (Request)', icon: 'description', route: '/portal/self-service/documents' },
            { name: 'ข้อมูลลูกน้อง (My Team)', icon: 'people', route: '/portal/self-service/subordinates' }
          ]
        }
      ],
      admin: [
        {
          groupName: 'Admin Management',
          items: [
            { name: 'จัดการข้อมูลบริษัท', icon: 'business', route: '/portal/admin/company' },
            {
              name: 'จัดการข้อมูลพนักงาน',
              icon: 'person_check',
              route: '/portal/admin/employees',
              children: [
                { name: 'ข้อมูลการทำงาน', icon: 'work', route: '/portal/admin/employees' },
                { name: 'รายงาน (Reports)', icon: 'description', route: '/portal/admin/employees/reports' },
                { name: 'ทะเบียนประวัติ', icon: 'folder', route: '/portal/admin/employees/master/list' }
              ]
            },
            { name: 'จัดการเงินเดือน', icon: 'attach_money', route: '/portal/admin/payroll' }
          ]
        }
      ]
    };

    return of(menuData);
  }

  /**
   * Get menu groups for current context
   */
  getMenuGroups(context: 'personal' | 'admin'): Observable<MenuGroup[]> {
    return new Observable(observer => {
      this.getMenuData().subscribe(data => {
        observer.next(data[context]);
        observer.complete();
      });
    });
  }
}

