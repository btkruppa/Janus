import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  collapsed = true;
  currentApp: String = 'Caliber';
  private urlSubscription: Subscription;

  constructor(private title: Title, private router: Router) { }

  ngOnInit() {
    this.processUrl(this.router.url);

  }

  private processUrl(url: String) {
    console.log(this);
    console.log(this.currentApp);
    if (url.startsWith('/Caliber')) {
      this.currentApp = 'Caliber';
      this.title.setTitle('Janus | Caliber')
    } else if (url.startsWith('/Bam')) {
      this.currentApp = 'Bam';
      this.title.setTitle('Janus | Bam');
    }
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }


  // clean up subscriptions
  ngOnDestroy() {

  }

}