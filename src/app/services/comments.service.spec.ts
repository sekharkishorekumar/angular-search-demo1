/* tslint:disable:no-unused-variable */

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { CommentsService, SearchData } from "./comments.service";

describe("CommentsService", () => {
  let service: CommentsService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentsService],
    });

    // inject the service
    injector = getTestBed();
    service = injector.get(CommentsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should have a service instance", () => {
    expect(service).toBeDefined();
  });

  it("should return a observable of data", () => {
    let mockData : SearchData[] = [
      {
        email: "kishore@gmail.com",
        name: "ksihore",
        body: "searchresultoftheuser",
      },
    ];
    service.getContacts("somedata").subscribe((data) => {
      expect(data).toBe(mockData);
    });

    const req = httpMock.expectOne(`${service.apiURL}somedata`);
    expect(req.request.method).toBe("GET");

    req.flush(mockData);
  });
});
