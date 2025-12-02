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
            { name: 'การลงเวลา (Time Attendance)', icon: 'access_time', route: '/ta/attendance' },
            { name: 'การขอเอกสาร (Request)', icon: 'description', route: '/workflow/request' },
            { name: 'ข้อมูลลูกน้อง (My Team)', icon: 'people', route: '/empview/team' }
          ]
        }
      ],
      admin: [
        {
          groupName: 'Admin Management',
          items: [
            { name: 'จัดการข้อมูลบริษัท', icon: 'business', route: '/company/manage' },
            {
              name: 'จัดการข้อมูลพนักงาน',
              icon: 'person_check',
              route: '/personal/manage',
              children: [
                { name: 'ข้อมูลการทำงาน', icon: 'work', route: '/emp/work-info' },
                { name: 'รายงาน (Reports)', icon: 'description', route: '/emp/reports' },
                { name: 'ทะเบียนประวัติ', icon: 'folder', route: '/emp/registry' }
              ]
            },
            { name: 'จัดการเงินเดือน', icon: 'attach_money', route: '/payroll/manage' }
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

