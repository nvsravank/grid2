import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Selection {
  value: string;
  viewValue: string;
}

export interface DataColumn extends Selection {
  parentValue?: string;
  isNumber?: boolean;
  isAdditive?: boolean;
}

export class AvailableColumnOptions {
  static columnOptions: DataColumn[] = [
    {value: 'quantity', viewValue: 'Quantity', parentValue: "holding", isNumber: true},
    {value: 'price', viewValue: 'Price ($)', parentValue: "holding", isNumber: true},
    {value: 'value', viewValue: 'Value ($)', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'ror', viewValue: 'Rate of Return', parentValue: "holding", isNumber: true},
    {value: 'yield', viewValue: 'Current Yield (%)', parentValue: "holding", isNumber: true},
    {value: 'percentageOfAccount', viewValue: '% of Account', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'estimatedAnnualIncome', viewValue: 'Estimated Annual Income ($)', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'cost', viewValue: 'Cost ($)', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'unrealizedGainLoss', viewValue: 'Unrealized Gain/Loss ($)', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'beginningValue', viewValue: 'Beginning Value', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'netContribution', viewValue: 'Net Contribution', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'changeInValue', viewValue: 'Change In Value', parentValue: "holding", isNumber: true, isAdditive: true},
    {value: 'assetName', viewValue: 'Asset Name', parentValue: "asset"},
    {value: 'ticker', viewValue: 'Ticker Synbol', parentValue: "asset"},
    {value: 'mgmtCompany', viewValue: 'Management Company', parentValue: "asset"},
    {value: 'morningstarRating', viewValue: 'Morningstar Rating', parentValue: "asset"},
    {value: 'assetType', viewValue: 'Asset Type', parentValue: "asset"},
    {value: 'assetClass1Name', viewValue: 'ACL 1 Name', parentValue: "assetClass1"},
    {value: 'assetClass2Name', viewValue: 'ACL 2 Name', parentValue: "assetClass2"},
    {value: 'assetClass3Name', viewValue: 'ACL 3 Name', parentValue: "assetClass3"},
    {value: 'investorId', viewValue: 'Investor ID', parentValue: "investor"},
    {value: 'investorName', viewValue: 'Investor Name', parentValue: "investor"},
    {value: 'acctNum', viewValue: 'Account Number', parentValue: "account"},
    {value: 'acctName', viewValue: 'Account Name', parentValue: "account"},
    {value: 'combinedAccountName', viewValue: 'Account Name / Manager / Style Name as applicable', parentValue: "account"},
    {value: 'mgrName', viewValue: 'Manager Name', parentValue: "account"},
    {value: 'productName', viewValue: 'Product Name', parentValue: "account"},
    {value: 'style', viewValue: 'Style', parentValue: "account"},
    {value: 'accountType', viewValue: 'Account Type', parentValue: "account"},
    {value: 'taxStatus', viewValue: 'Tax Status', parentValue: "account"},
  ];
}

export class Category {
  categoryId: string;
  categoryPrimaryKey: any;
  subCategories: Category[] = [];
  categoryData = [];
  summaryData = {};
}

export interface HoldingsCustomizationOptions {
  category1?: string;
  category2?: string;
  category3?: string;
  category1Data?: Array<DataColumn>;
  category2Data?: Array<DataColumn>;
  category3Data?: Array<DataColumn>;
  dataColumns?: Array<DataColumn>;
}


export class CategorizedData {
  isCategorized: boolean;
  uncategorizedData: Category;
  categorizedData: Category[];
}


@Injectable()
export class WRIHoldingsService {
  jwtToken: string = '';
  serviceURL: string = '';
  advisorID: string = '';
  private dataSet1 = [];
  private dataSet2 = [];

  constructor(private http: HttpClient) {
    const pageData = (<any> window).AppSettings;
    if (pageData && pageData.jwtToken) this.jwtToken = pageData.jwtToken;
    if (pageData && pageData.serviceBusURL) {
      this.serviceURL = pageData.serviceBusURL + '/report-builder-service';
    }
    else {
      this.serviceURL = 'https://dummylocation.com/report-builder-service';
    }
    if (pageData && pageData.advisorID) this.advisorID = pageData.advisorID;
  }

  getData(options: HoldingsCustomizationOptions, dummyData: boolean = false) {
    if (dummyData) {
      return of(this.getDummyData(options));
    }

    let postParams = new HttpParams();
    postParams.append('srcDefConst','reportBuilder');
    postParams.append('pageMode','componentData');
    postParams.append('formatType','html');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${this.jwtToken}`);
    headers = headers.set('X-JWT-Assertion', this.jwtToken);

    const jsonRequestBody = {advisorTaxId: this.advisorID};
    return this.http.post(this.serviceURL + '/get-default-reports-list-metadata', jsonRequestBody, {headers: headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.status);
  }

  getDummyData(options: HoldingsCustomizationOptions) {
        // Dummy data setup.
        this.dataSet1 = [
          {quantity: 7318.06, price: 1.00, value: 7318.06, ror: 12.534, yield: 0   , percentageOfAccount: 0.31, estimatedAnnualIncome: 0,      unrealizedGainLoss: 0,        cost: 0,        beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Brokerage Money Market", ticker:"", mgmtCompany: null, morningstarRating: "5 star", assetType: "Stock", assetClass1Name: "Cash or Equivalents", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12345", assetClass1Id: "ACL1 ID 1", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 600, price: 50.94, value:  30564, ror: 12.5345365, yield: 1.88, percentageOfAccount: 1.29, estimatedAnnualIncome: 576.00, unrealizedGainLoss: 14534.99, cost: 16029.01, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Abbot Laboratories", ticker:"abt", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12346", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 200, price:132.82, value:  26564, ror: 12.5345365, yield: 2.44, percentageOfAccount: 1.12, estimatedAnnualIncome: 648.00, unrealizedGainLoss: 12219.86, cost: 14344.14, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Air Products & chemicals Inc", ticker:"apd", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12347", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 500, price: 29.36, value:  14680, ror: 12.5345365, yield: 2.04, percentageOfAccount: 0.62, estimatedAnnualIncome: 300.00, unrealizedGainLoss:  1096.30, cost: 13583.70, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Allison Transmission HLDGS Inc.", ticker:"alsn", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12348", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity:1000, price:  8.54, value:  8540 , ror: 12.5345365, yield: 2.43, percentageOfAccount: 0.36, estimatedAnnualIncome: 125.43, unrealizedGainLoss: -2182.30, cost: 10722.30, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Apigee Corp", ticker:"apic", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12349", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
          {quantity: 280, price:123.38, value:34546.4, ror: 12.5345365, yield: 1.69, percentageOfAccount: 1.46, estimatedAnnualIncome: 582.40, unrealizedGainLoss: 13549.60, cost: 20996.80, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "apple inc", ticker:"aapl", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12340", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
          {quantity: 400, price: 54.76, value:  21904, ror: 12.5345365, yield: 2.44, percentageOfAccount: 0.92, estimatedAnnualIncome: 306.00, unrealizedGainLoss:   297.08, cost: 21606.92, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Armstrong World Industries Inc New", ticker:"awi", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12341", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
          {quantity: 200, price: 80.58, value:  16116, ror: 12.5345365, yield: 2.43, percentageOfAccount: 0.68, estimatedAnnualIncome: 392.00, unrealizedGainLoss:  9829.22, cost: 16116.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Automatic Data Processing Inc", ticker:"adp", mgmtCompany: null, morningstarRating: "4 star", assetType: "Mutual Fund", assetClass1Name: "Mutual Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Sample Investor", acctNum: "03004721 000", acctName: "The Oliver Wendell", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Giftc Custodial IRA", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12342", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
        ];
        this.dataSet2 = [
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Apple Inc.", ticker:"appl", mgmtCompany: null, morningstarRating: "5 star", assetType: "Stock", assetClass1Name: "Large Cap", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Investor Name 1", acctNum: "127635417236", acctName: "Short Account Name 1", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12345", assetClass1Id: "ACL1 ID 1", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Apple Inc.", ticker:"appl", mgmtCompany: null, morningstarRating: "5 star", assetType: "Stock", assetClass1Name: "Large Cap", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Investor Name 1", acctNum: "127635417237", acctName: "Short Account Name 2", combinedAccountName: "Lion Account", mgrName: "Blackrock", productName: "Lion Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123456", acctId: "123457", assetId: "CUSIPv 12345", assetClass1Id: "ACL1 ID 1", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Apple Inc.", ticker:"appl", mgmtCompany: null, morningstarRating: "5 star", assetType: "Stock", assetClass1Name: "Large Cap", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Investor Name 2", acctNum: "127635417236", acctName: "Short Account Name 1", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123457", acctId: "123456", assetId: "CUSIPv 12345", assetClass1Id: "ACL1 ID 1", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "Apple Inc.", ticker:"appl", mgmtCompany: null, morningstarRating: "5 star", assetType: "Stock", assetClass1Name: "Large Cap", assetClass2Name: "Growth", assetClass3Name: "Technology", investorName: "Investor Name 2", acctNum: "127635417237", acctName: "Short Account Name 2", combinedAccountName: "Lion Account", mgrName: "Blackrock", productName: "Lion Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123457", acctId: "123457", assetId: "CUSIPv 12345", assetClass1Id: "ACL1 ID 1", assetClass2Id: "ACL2 ID 1", assetClass3Id: "ACL3 ID 1" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "QQQ ETF", ticker:"QQQ", mgmtCompany: null, morningstarRating: "4 star", assetType: "ETF", assetClass1Name: "Index Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Investor Name 1", acctNum: "127635417236", acctName: "Short Account Name 1", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123456", acctId: "123456", assetId: "CUSIPv 12346", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "QQQ ETF", ticker:"QQQ", mgmtCompany: null, morningstarRating: "4 star", assetType: "ETF", assetClass1Name: "Index Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Investor Name 1", acctNum: "127635417237", acctName: "Short Account Name 2", combinedAccountName: "Lion Account", mgrName: "Blackrock", productName: "Lion Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123456", acctId: "123457", assetId: "CUSIPv 12346", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "QQQ ETF", ticker:"QQQ", mgmtCompany: null, morningstarRating: "4 star", assetType: "ETF", assetClass1Name: "Index Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Investor Name 2", acctNum: "127635417236", acctName: "Short Account Name 1", combinedAccountName: "Eagle Account", mgrName: "Blackrock", productName: "Eagle Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123457", acctId: "123456", assetId: "CUSIPv 12346", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
          {quantity: 200, price: 25.56, value: 5112, ror: 12.5345365, yield: 2.56, percentageOfAccount: 25.45655, estimatedAnnualIncome: 400.00, unrealizedGainLoss: 3000.00, cost: 3000.00, beginningValue: 4000.00, netContribution: 0, changeInValue: 1112.00, assetName: "QQQ ETF", ticker:"QQQ", mgmtCompany: null, morningstarRating: "4 star", assetType: "ETF", assetClass1Name: "Index Fund", assetClass2Name: "Balanced", assetClass3Name: "Industry", investorName: "Investor Name 2", acctNum: "127635417237", acctName: "Short Account Name 2", combinedAccountName: "Lion Account", mgrName: "Blackrock", productName: "Lion Account", style: "Growth", accountType: "Retail", taxStatus: "Post Tax", investorId: "123457", acctId: "123457", assetId: "CUSIPv 12346", assetClass1Id: "ACL1 ID 2", assetClass2Id: "ACL2 ID 2", assetClass3Id: "ACL3 ID 3" },
        ];
        return this.separateDataIntoCategories(this.dataSet1, options);
        // Dummy data setup complete.    
    
  }

  separateDataIntoCategories(dataTable: Array<any>, options: HoldingsCustomizationOptions){
    const categories: Category[] = [];
    let returnValue = new CategorizedData();
    returnValue.categorizedData = categories;
    if (options.category1 === null) {
      //Nocategories defined. So use full Data Table.
      let uncategorized: Category = {
        categoryId: "",
        categoryPrimaryKey: "",
        categoryData: [],
        subCategories: [],
        summaryData: {}
      };
      uncategorized.categoryData = dataTable;
      this.calculateSummaryData(uncategorized, options);
      returnValue.isCategorized = false;
      returnValue.uncategorizedData = uncategorized;
      return returnValue;
    }
    // Need to separate rows into categories
    // identify Primary column in data.
    let primaryColumn = this.identifyPrimaryColumn(options.category1);
    this.allocateRowsToCategory(dataTable, categories, primaryColumn);
    categories.forEach(category1 => {
      this.calculateSummaryData(category1, options);
      if (options.category2 !== null) {
        //need to further categorize.
        primaryColumn = this.identifyPrimaryColumn(options.category2);
        category1.subCategories = [];
        this.allocateRowsToCategory(category1.categoryData, category1.subCategories, primaryColumn);
        category1.subCategories.forEach(category2 => {
          this.calculateSummaryData(category2, options);
          if (options.category3 !== null) {
            //need to further categorize.
            primaryColumn = this.identifyPrimaryColumn(options.category3);
            category2.subCategories = [];
            this.allocateRowsToCategory(category2.categoryData, category2.subCategories, primaryColumn);        
            category2.subCategories.forEach(category3 => {
              this.calculateSummaryData(category3, options);
            });
          }  
        });
      }  
    });
    returnValue.isCategorized = true;
    returnValue.categorizedData = categories;
    return returnValue;
  }

  calculateSummaryData(category: Category, options: HoldingsCustomizationOptions) {
    category.summaryData = {};
    options.dataColumns.forEach(column => {
      if(column.isNumber && column.isAdditive) {
        let sum = 0;
        for (let index = 0; index < category.categoryData.length; index++) {
          const row = category.categoryData[index];
          sum = sum + (+row[column.value]);
        }
        if (isNaN(sum)) { sum=0;}
        category.summaryData[column.value] = sum;
      }
    });
  }

  allocateRowsToCategory(dataSet: any[], categories: Category[], primaryColumn: string){
    dataSet.forEach(row => {
      const primaryKey = row[primaryColumn];
      if(primaryKey === null) {return;} // Ignore row as it cannot be categorized.
      let found = false;
      for (let index = 0; index < categories.length; index++) {
        const category = categories[index];
        if(category.categoryPrimaryKey === primaryKey) {
          found = true;
          category.categoryData.push(row);
        }
      }
      if (!found) {
        let newCategory: Category = new Category();
        newCategory.categoryId = primaryColumn;
        newCategory.categoryPrimaryKey = primaryKey;
        newCategory.categoryData = [row];
        categories.push(newCategory);
      }
    });
  }

  identifyPrimaryColumn(category: string) {
    let primaryColumn = null;
    switch (category) {
      case "account":
        primaryColumn = "acctId";
      break;
      case "investor":
        primaryColumn = "investorId";
      break;
      case "asset":
        primaryColumn = "assetId";
      break;
      case "assetClass1":
        primaryColumn = "assetClass1Id";
      break;
      case "assetClass2":
        primaryColumn = "assetClass2Id";
      break;
      case "assetClass3":
        primaryColumn = "acctClass3Id";
      break;
      default:
      break;
    }
    return primaryColumn;
  }

}
