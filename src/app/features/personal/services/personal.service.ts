import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export interface PersonalProfile {
  employeeId: string;
  tfullname: string;
  efullname: string;
  email?: string;
  phone?: string;
  mobile?: string;
  birthDate?: string;
  gender?: string;
  maritalStatus?: string;
  nationality?: string;
  religion?: string;
  idCard?: string;
  picture?: string;
}

export interface Address {
  addressId?: string;
  addressType: string; // current, permanent, emergency
  addressLine1: string;
  addressLine2?: string;
  district?: string;
  province?: string;
  postalCode?: string;
  country?: string;
  isCurrent?: boolean;
}

export interface FamilyMember {
  familyId?: string;
  relationship: string; // spouse, child, parent, sibling
  tfullname: string;
  efullname?: string;
  birthDate?: string;
  idCard?: string;
  occupation?: string;
  phone?: string;
  isDependent?: boolean;
}

export interface Education {
  educationId?: string;
  educationLevel: string; // bachelor, master, doctorate, etc.
  institution: string;
  major?: string;
  startDate?: string;
  endDate?: string;
  graduationDate?: string;
  gpa?: number;
  degree?: string;
}

export interface WorkExperience {
  experienceId?: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
  salary?: number;
}

export interface Document {
  documentId?: string;
  documentType: string;
  documentName: string;
  fileName: string;
  fileSize?: number;
  uploadDate?: string;
  expiryDate?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private apiService: ApiService) { }

  // Profile Management
  getProfile(): Observable<any> {
    return this.apiService.get<PersonalProfile>(
      `${environment.apiEndpoints.employeeView}/employee/profile`,
      null,
      true,
      'personal_profile'
    );
  }

  updateProfile(profile: Partial<PersonalProfile>): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.employeeView}/employee/profile`,
      profile
    );
  }

  uploadProfilePicture(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('picture', file);
    return this.apiService.post(
      `${environment.apiEndpoints.employeeView}/employee/profile/picture`,
      formData
    );
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.auth}/change-password`,
      { oldPassword, newPassword }
    );
  }

  // Address Management
  getAddresses(): Observable<any> {
    return this.apiService.get<Address[]>(
      `${environment.apiEndpoints.employeeView}/employee/addresses`,
      null,
      true,
      'addresses'
    );
  }

  addAddress(address: Address): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.employeeView}/employee/addresses`,
      address
    );
  }

  updateAddress(addressId: string, address: Address): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.employeeView}/employee/addresses/${addressId}`,
      address
    );
  }

  deleteAddress(addressId: string): Observable<any> {
    return this.apiService.delete(
      `${environment.apiEndpoints.employeeView}/employee/addresses/${addressId}`
    );
  }

  // Family Management
  getFamilyMembers(): Observable<any> {
    return this.apiService.get<FamilyMember[]>(
      `${environment.apiEndpoints.employeeView}/employee/family`,
      null,
      true,
      'family_members'
    );
  }

  addFamilyMember(member: FamilyMember): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.employeeView}/employee/family`,
      member
    );
  }

  updateFamilyMember(familyId: string, member: FamilyMember): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.employeeView}/employee/family/${familyId}`,
      member
    );
  }

  deleteFamilyMember(familyId: string): Observable<any> {
    return this.apiService.delete(
      `${environment.apiEndpoints.employeeView}/employee/family/${familyId}`
    );
  }

  // Education Management
  getEducationHistory(): Observable<any> {
    return this.apiService.get<Education[]>(
      `${environment.apiEndpoints.employeeView}/employee/education`,
      null,
      true,
      'education_history'
    );
  }

  addEducation(education: Education): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.employeeView}/employee/education`,
      education
    );
  }

  updateEducation(educationId: string, education: Education): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.employeeView}/employee/education/${educationId}`,
      education
    );
  }

  deleteEducation(educationId: string): Observable<any> {
    return this.apiService.delete(
      `${environment.apiEndpoints.employeeView}/employee/education/${educationId}`
    );
  }

  // Work Experience Management
  getWorkExperience(): Observable<any> {
    return this.apiService.get<WorkExperience[]>(
      `${environment.apiEndpoints.employeeView}/employee/experience`,
      null,
      true,
      'work_experience'
    );
  }

  addWorkExperience(experience: WorkExperience): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.employeeView}/employee/experience`,
      experience
    );
  }

  updateWorkExperience(experienceId: string, experience: WorkExperience): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.employeeView}/employee/experience/${experienceId}`,
      experience
    );
  }

  deleteWorkExperience(experienceId: string): Observable<any> {
    return this.apiService.delete(
      `${environment.apiEndpoints.employeeView}/employee/experience/${experienceId}`
    );
  }

  // Documents Management
  getDocuments(): Observable<any> {
    return this.apiService.get<Document[]>(
      `${environment.apiEndpoints.employeeView}/employee/documents`,
      null,
      true,
      'documents'
    );
  }

  uploadDocument(file: File, documentType: string, description?: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('documentType', documentType);
    if (description) {
      formData.append('description', description);
    }
    return this.apiService.post(
      `${environment.apiEndpoints.employeeView}/employee/documents`,
      formData
    );
  }

  downloadDocument(documentId: string): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.employeeView}/employee/documents/${documentId}/download`
    );
  }

  deleteDocument(documentId: string): Observable<any> {
    return this.apiService.delete(
      `${environment.apiEndpoints.employeeView}/employee/documents/${documentId}`
    );
  }
}
