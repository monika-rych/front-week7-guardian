import { Component, OnInit } from '@angular/core';
import { NewsDto } from '../dto/news-dto';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public selectedArticle: NewsDto;

  public news: NewsDto[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe( n => this.news = n);
  }

  public onSelect(selected: NewsDto): void {
    this.selectedArticle = {...selected};
  }

  public onSave(): void {
    this.newsService.update(this.selectedArticle).subscribe( () => {
      this.updateLocalArray();
      this.selectedArticle = null;
    });
  }

  private updateLocalArray() {
    let itemIndex = this.news.findIndex(item => item.id == this.selectedArticle.id);
    this.news[itemIndex] = this.selectedArticle;
  }

  public onCancel(): void {
    this.selectedArticle = null;
  }


}
