/* 
This pseudocode demonstrates a simple browser back/forward system using two stacks in JavaScript. 
The class BrowserStacks has methods for visiting a website, going back, and going forward. 
The console.log statements are used for illustration purposes and can be replaced with actual
navigation or rendering logic in a real implementation.
*/


class BrowserStacks {
    constructor() {
      this.backStack = [];       // Stack for backward navigation
      this.forwardStack = [];    // Stack for forward navigation
      this.currentWebsite = null; // Current website being visited
    }
  
    visitWebsite(website) {
      if (this.currentWebsite !== null) {
        this.backStack.push(this.currentWebsite);
        this.forwardStack = []; // Clear forward stack when a new website is visited
      }
  
      this.currentWebsite = website;
      console.log(`Visited: ${website}`);
    }
  
    goBack() {
      if (this.backStack.length === 0) {
        console.log("Cannot go back. Back stack is empty.");
        return;
      }
  
      this.forwardStack.push(this.currentWebsite);
      this.currentWebsite = this.backStack.pop();
      console.log(`Back to: ${this.currentWebsite}`);
    }
  
    goForward() {
      if (this.forwardStack.length === 0) {
        console.log("Cannot go forward. Forward stack is empty.");
        return;
      }
  
      this.backStack.push(this.currentWebsite);
      this.currentWebsite = this.forwardStack.pop();
      console.log(`Forward to: ${this.currentWebsite}`);
    }
  }
  
  // Example usage
  const browser = new BrowserStacks();
  
  browser.visitWebsite("Google");
  browser.visitWebsite("Yahoo");
  browser.visitWebsite("eBay");
  
  browser.goBack();
  browser.goForward();
  
  browser.visitWebsite("Apple");
  browser.goBack();
  browser.goForward();
  
