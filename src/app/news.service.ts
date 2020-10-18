import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsDto } from './dto/news-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrl = 'http://localhost:8080/news';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getNews(): Observable<NewsDto[]> {
    return this.http.get<NewsDto[]>(this.newsUrl);
  }

  public update(news: NewsDto): Observable<any> {
    return this.http.put(this.newsUrl, news, this.httpOptions);
  }
}
