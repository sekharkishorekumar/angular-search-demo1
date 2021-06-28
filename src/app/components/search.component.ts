import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { CommentsService, SearchData } from "../services/comments.service";

@Component({
  selector: "search-app",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  public myForm: FormGroup;
  public searchResult: SearchData[];
  public errorMessage: string;
  constructor(public commentsService: CommentsService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      continent: new FormControl(),
    });
  }

  onSubmit(searchValue) {
    this.errorMessage = "";
    this.searchResult = [];
    if (searchValue.continent.length > 3) {
      this.commentsService
        .getContacts(searchValue.continent)
        .subscribe((data) => {
          if (data.length > 20) {
            data = data.slice(0, 20);
          }
          this.searchResult = data;
          console.log(this.searchResult);
        });
    } else if (searchValue.continent === "") {
      this.errorMessage = "Please enter your search string";
    } else {
      this.errorMessage = "Please enter search text more than 3 characters";
    }
  }
}
