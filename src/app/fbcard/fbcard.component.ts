import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../models/card'; // Adjusted the import path
import { CardService } from '../services/card.service'; // Adjust the import path as necessary
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-fbcard',
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './fbcard.component.html',
  styleUrl: './fbcard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbcardComponent {
  // Define or import Card
  cardData: Card[] = []; // Initialize cardData as an empty array
  private dialog = inject(MatDialog);
  isRefreshing = false;

  constructor(private cardService: CardService) { }
  ngOnInit() {
    this.loadCards();
  }

  loadCards():void {
    this.cardService.getCards().pipe(take(1)).subscribe((data: any) => {
      this.cardData = data.users.map((user: Card) => ({
        ...user,
        likes: 0,
      }));
    });
  }

  like(card: Card) {
    if (card.likes !== undefined) {
      card.likes++
    }
  }

  openRefreshPopup() {
    const dialogRef = this.dialog.open(PopupComponent);
    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        this.triggerRefreshEffect();
      }
    });
  }

  triggerRefreshEffect():void {
    (document.activeElement as HTMLElement)?.blur(); // Prevent aria-hidden warnings
    this.isRefreshing = true;
    this.loadCards();

    setTimeout(() => {
      this.isRefreshing = false;
    }, 200); // Simulate a 2-second refresh effect
  }
}
