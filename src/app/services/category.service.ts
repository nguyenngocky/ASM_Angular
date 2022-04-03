import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
    getCategorys(): Observable<any> {
      return this.http.get(apiUrl);
    }

    getCategory(id: number | string): Observable<any> {
      return this.http.get(`${apiUrl}/${id}`);
    }

    createCategory(data :any): Observable<any> {
      return this.http.post(`${apiUrl}`, data);
    }

    updateCategory(id :number | string, data :any): Observable<any> {
      return this.http.put(`${apiUrl}/${id}`, data);
    }

    deleteCategory(id :number | string) {
      return this.http.delete(`${apiUrl}/${id}`)
    }
}
