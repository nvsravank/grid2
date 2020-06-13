
export const env: any = {
  production: false
}



export const allReportsData: any =

{
	"className": "com.albridge.services.GetDefaultReportsListMetadataResponse",
	
		"requestId": "7abae37f-d1c5-439e-a24d-070abaca5754",
		"messages": {
			"message": []
		},
		"popularCount": 2,
		"totalReportCount": 5,
		"customReportCount": 6,
		"categoryList": [
			{
				"categoryId": 9999,
				"categoryName": "Custom",
				"reportsList": [
					{
						"reportId": 10001,
						"reportName": "Custom Report Test1",
						"popularReport": "N",
						"reportType": "C"
					},
					{
						"reportId": 9000,
						"reportName": "Portfolio Snapshot Summary - Anurag",
						"popularReport": "N",
						"reportType": "C"
					},
					{
						"reportId": 1003,
						"reportName": "Portfolio Snapshort Summary - Customized",
						"popularReport": "N",
						"reportType": "C"
					},
					{
						"reportId": 1005,
						"reportName": "Portfolio Return - Customized",
						"popularReport": "N",
						"reportType": "C"
					},
					{
						"reportId": 1004,
						"reportName": "Portfolio Value - Customized",
						"popularReport": "N",
						"reportType": "C"
					},
					{
						"reportId": 10002,
						"reportName": "Custom Report Test 2",
						"popularReport": "N",
						"reportType": "C"
					}
				]
			},
			{
				"categoryId": 5,
				"categoryName": "Performance",
				"reportsList": [
					{
						"reportId": 50,
						"reportName": "Portfolio Performance",
						"popularReport": "Y",
						"reportType": "D"
					},
					{
						"reportId": 78,
						"reportName": "Portfolio Snapshot Summary",
						"popularReport": "Y",
						"reportType": "D"
					}
				]
			},
			{
				"categoryId": 4,
				"categoryName": "Holdings",
				"reportsList": [
					{
						"reportId": 4,
						"reportName": "Holdings by Portfolio",
						"popularReport": "N",
						"reportType": "D"
					}
				]
			},
			{
				"categoryId": 5,
				"categoryName": "Performance",
				"reportsList": [
					{
						"reportId": 5,
						"reportName": "Holdings by Classification",
						"popularReport": "N",
						"reportType": "D"
					}
				]
			},
			{
				"categoryId": 4,
				"categoryName": "Holdings",
				"reportsList": [
					{
						"reportId": 3,
						"reportName": "Holdings by Investor",
						"popularReport": "N",
						"reportType": "D"
					}
				]
			}
		]
	
} 


  export const reportData: any =
  {
    "messages": {
      "message": null
    },
    "reportId": 10110,
    "reportName": "pss-ui-demo6",
    "multiPage": "N",
    "orientation": "LANDSCAPE",
    "componentsList": [
      {
        "componentName": "REPORT_HEADER",
        "componentId": 0,
        "htmlId": "report_header",
        "layoutRow": "1",
        "layoutColumn": "1",
        "width": "100",
        "divPosition": "null",
        "uiProperties": "{\"cols\":10,\"rows\":1,\"y\":0,\"x\":0,\"maxItemRows\":1,\"minItemRows\":1,\"htmlId\":\"report_header\",\"dragEnabled\":false,\"resizeEnabled\":false,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 101,
            "elementName": "REPORT_NAME",
            "elementDisplayPlaceHolder": "Portfolio Snapshot Summary",
            "elementValue": "Portfolio Snapshot Summary",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 102,
            "elementName": "REPORT_TYPE",
            "elementDisplayPlaceHolder": "Combined Account Portfolio",
            "elementValue": "null",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 2
          },
          {
            "elementId": 104,
            "elementName": "PREPARED_FOR",
            "elementDisplayPlaceHolder": "PREPARED FOR",
            "elementValue": "null",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 3
          },
          {
            "elementId": 105,
            "elementName": "LOGO",
            "elementDisplayPlaceHolder": "logo",
            "elementValue": "null",
            "elementCategory": "CHECK_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 4
          }
        ]
      },
      {
        "componentName": "PORTFOLIO_PERFORMANCE",
        "componentId": 1,
        "htmlId": "portfolio_performance",
        "layoutRow": "2",
        "layoutColumn": "1",
        "width": "60",
        "divPosition": "null",
        "uiProperties": "{\"cols\":6,\"rows\":2,\"x\":0,\"y\":1,\"maxItemRows\":2,\"minItemRows\":2,\"htmlId\":\"portfolio_performance\",\"dragEnabled\":true,\"resizeEnabled\":true,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 1,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "SELECTED_PERIOD",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 3
          },
          {
            "elementId": 2,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "QUARTER_TO_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 4
          },
          {
            "elementId": 3,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "YEAR_TO_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 5
          },
          {
            "elementId": 4,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "LAST_QUARTER",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 6
          },
          {
            "elementId": 5,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "LAST_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 7
          },
          {
            "elementId": 6,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "ONE_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 8
          },
          {
            "elementId": 7,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "THREE_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 9
          },
          {
            "elementId": 8,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "FIVE_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 10
          },
          {
            "elementId": 9,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "TEN_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 11
          },
          {
            "elementId": 10,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "SINCE_START_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 2
          },
          {
            "elementId": 11,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "MONTH_TO_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 12
          },
          {
            "elementId": 12,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "LAST_MONTH",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 13
          },
          {
            "elementId": 13,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "CALENDAR_YEAR_1",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 14
          },
          {
            "elementId": 14,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "CALENDAR_YEAR_2",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 15
          },
          {
            "elementId": 15,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "CALENDAR_YEAR_3",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 16
          },
          {
            "elementId": 106,
            "elementName": "TABLE_ROW",
            "elementDisplayPlaceHolder": "Beginning Value",
            "elementValue": "null",
            "elementCategory": "ENTITY_ROW",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 107,
            "elementName": "TABLE_ROW",
            "elementDisplayPlaceHolder": "Net Contribution",
            "elementValue": "null",
            "elementCategory": "ENTITY_ROW",
            "defaultDisplay": "Y",
            "sortOrder": 2
          },
          {
            "elementId": 108,
            "elementName": "TABLE_ROW",
            "elementDisplayPlaceHolder": "Change In Value",
            "elementValue": "null",
            "elementCategory": "ENTITY_ROW",
            "defaultDisplay": "Y",
            "sortOrder": 3
          },
          {
            "elementId": 109,
            "elementName": "TABLE_ROW",
            "elementDisplayPlaceHolder": "Ending Value",
            "elementValue": "null",
            "elementCategory": "ENTITY_ROW",
            "defaultDisplay": "Y",
            "sortOrder": 4
          },
          {
            "elementId": 110,
            "elementName": "TABLE_ROW",
            "elementDisplayPlaceHolder": "Return",
            "elementValue": "null",
            "elementCategory": "ENTITY_ROW",
            "defaultDisplay": "Y",
            "sortOrder": 5
          },
          {
            "elementId": 111,
            "elementName": "TABLE_ROW",
            "elementDisplayPlaceHolder": "Benchmarks",
            "elementValue": "null",
            "elementCategory": "ENTITY_ROW",
            "defaultDisplay": "Y",
            "sortOrder": 6
          },
          {
            "elementId": 112,
            "elementName": "comp_title",
            "elementDisplayPlaceHolder": "Component Title",
            "elementValue": "Portfolio Return",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          }
        ]
      },
      {
        "componentName": "PORTFOLIO_VALUE",
        "componentId": 2,
        "htmlId": "portfolio_value",
        "layoutRow": "2",
        "layoutColumn": "2",
        "width": "40",
        "divPosition": "null",
        "uiProperties": "{\"cols\":4,\"rows\":2,\"x\":6,\"y\":1,\"maxItemRows\":2,\"minItemRows\":2,\"htmlId\":\"portfolio_value\",\"dragEnabled\":true,\"resizeEnabled\":true,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 112,
            "elementName": "comp_title",
            "elementDisplayPlaceHolder": "Component Title",
            "elementValue": "Portfolio Value",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 124,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "BV_Investments",
            "elementValue": "null",
            "elementCategory": "RADIO",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 125,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "Investments_Since_Inception",
            "elementValue": "null",
            "elementCategory": "RADIO",
            "defaultDisplay": "N",
            "sortOrder": 1
          },
          {
            "elementId": 126,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "NO_INVESTMENT_LINE",
            "elementValue": "null",
            "elementCategory": "RADIO",
            "defaultDisplay": "N",
            "sortOrder": 1
          },
          {
            "elementId": 127,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "SELECTED_PERIOD",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 128,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "SINCE_START_DATE",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 1
          },
          {
            "elementId": 129,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "BENCHMARK_1",
            "elementValue": "null",
            "elementCategory": "CHECK_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 130,
            "elementName": "PVB_CHART",
            "elementDisplayPlaceHolder": "BENCHMARK_2",
            "elementValue": "null",
            "elementCategory": "CHECK_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          }
        ]
      },
      {
        "componentName": "ACCOUNT_PERFORMANCE",
        "componentId": 3,
        "htmlId": "account_performance",
        "layoutRow": "4",
        "layoutColumn": "1",
        "width": "60",
        "divPosition": "null",
        "uiProperties": "{\"cols\":6,\"rows\":3,\"x\":0,\"y\":4,\"maxItemRows\":3,\"minItemRows\":3,\"htmlId\":\"account_performance\",\"dragEnabled\":true,\"resizeEnabled\":true,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 1,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "SELECTED_PERIOD",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 7
          },
          {
            "elementId": 2,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "QUARTER_TO_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 8
          },
          {
            "elementId": 3,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "YEAR_TO_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 9
          },
          {
            "elementId": 4,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "LAST_QUARTER",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 10
          },
          {
            "elementId": 5,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "LAST_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 11
          },
          {
            "elementId": 6,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "ONE_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 12
          },
          {
            "elementId": 7,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "THREE_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 13
          },
          {
            "elementId": 8,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "FIVE_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 14
          },
          {
            "elementId": 9,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "TEN_YEAR",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 15
          },
          {
            "elementId": 10,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "SINCE_START_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "Y",
            "sortOrder": 2
          },
          {
            "elementId": 11,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "MONTH_TO_DATE",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 16
          },
          {
            "elementId": 12,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "LAST_MONTH",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 17
          },
          {
            "elementId": 13,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "CALENDAR_YEAR_1",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 18
          },
          {
            "elementId": 14,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "CALENDAR_YEAR_2",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 19
          },
          {
            "elementId": 15,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "CALENDAR_YEAR_3",
            "elementValue": "null",
            "elementCategory": "TIME_PERIOD",
            "defaultDisplay": "N",
            "sortOrder": 20
          },
          {
            "elementId": 112,
            "elementName": "comp_title",
            "elementDisplayPlaceHolder": "Component Title",
            "elementValue": "Account Performance",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 117,
            "elementName": "CHECK_BOX",
            "elementDisplayPlaceHolder": "INCLUDE_CLOSED_ACCOUNTS",
            "elementValue": "null",
            "elementCategory": "CHECK_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 118,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "ACCOUNT_NUMBER",
            "elementValue": "null",
            "elementCategory": "TABLE_HEADER",
            "defaultDisplay": "Y",
            "sortOrder": 3
          },
          {
            "elementId": 119,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "START_DATE",
            "elementValue": "null",
            "elementCategory": "TABLE_HEADER",
            "defaultDisplay": "Y",
            "sortOrder": 4
          },
          {
            "elementId": 120,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "VALUE",
            "elementValue": "null",
            "elementCategory": "TABLE_HEADER",
            "defaultDisplay": "Y",
            "sortOrder": 5
          },
          {
            "elementId": 121,
            "elementName": "TABLE_HEADER",
            "elementDisplayPlaceHolder": "PERCENT",
            "elementValue": "null",
            "elementCategory": "TABLE_HEADER",
            "defaultDisplay": "Y",
            "sortOrder": 6
          },
          {
            "elementId": 122,
            "elementName": "AP_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO_10_ACCOUNTS",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 1
          },
          {
            "elementId": 123,
            "elementName": "AP_DROP_DOWN",
            "elementDisplayPlaceHolder": "ALL_ACCOUNTS",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "Y",
            "sortOrder": 2
          }
        ]
      },
      {
        "componentName": "ASSET_CATEGORY",
        "componentId": 4,
        "htmlId": "asset_category",
        "layoutRow": "4",
        "layoutColumn": "2",
        "width": "40",
        "divPosition": "null",
        "uiProperties": "{\"cols\":4,\"rows\":3,\"x\":6,\"y\":4,\"maxItemRows\":3,\"minItemRows\":3,\"htmlId\":\"asset_category\",\"dragEnabled\":true,\"resizeEnabled\":true,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 112,
            "elementName": "comp_title",
            "elementDisplayPlaceHolder": "Component Title",
            "elementValue": "Asset Type",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 113,
            "elementName": "ASTALLOC",
            "elementDisplayPlaceHolder": "ASSET_TYPE",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 114,
            "elementName": "ASTALLOC",
            "elementDisplayPlaceHolder": "INVESTMENT_STYLE",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 2
          },
          {
            "elementId": 131,
            "elementName": "ACL_1_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO 5 ASSET CATEGORIES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 132,
            "elementName": "ACL_1_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO 10 ASSET CATEGORIES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 2
          },
          {
            "elementId": 133,
            "elementName": "ACL_1_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO 15 ASSET CATEGORIES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 3
          },
          {
            "elementId": 134,
            "elementName": "ACL_1_DROP_DOWN",
            "elementDisplayPlaceHolder": "ALL ASSET CATEGORIES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 4
          },
          {
            "elementId": 135,
            "elementName": "ACL_2_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO 5 INVESTMENT STYLES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 136,
            "elementName": "ACL_2_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO 10 INVESTMENT STYLES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 2
          },
          {
            "elementId": 137,
            "elementName": "ACL_2_DROP_DOWN",
            "elementDisplayPlaceHolder": "UPTO 15 INVESTMENT STYLES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 3
          },
          {
            "elementId": 138,
            "elementName": "ACL_2_DROP_DOWN",
            "elementDisplayPlaceHolder": "ALL INVESTMENT STYLES",
            "elementValue": "null",
            "elementCategory": "DROPDOWN",
            "defaultDisplay": "N",
            "sortOrder": 4
          }
        ]
      },
      {
        "componentName": "REPORT_FOOTER",
        "componentId": 5,
        "htmlId": "report_footer",
        "layoutRow": "5",
        "layoutColumn": "1",
        "width": "100",
        "divPosition": "null",
        "uiProperties": "{\"cols\":10,\"rows\":1,\"x\":0,\"y\":9,\"maxItemRows\":1,\"minItemRows\":1,\"htmlId\":\"report_footer\",\"dragEnabled\":false,\"resizeEnabled\":false,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 103,
            "elementName": "PREPARED_BY",
            "elementDisplayPlaceHolder": "PREPARED BY",
            "elementValue": "null",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          }
        ]
      },
      {
        "componentName": "PORTFOLIO_SUMMARY",
        "componentId": 6,
        "htmlId": "portfolio_summary",
        "layoutRow": "3",
        "layoutColumn": "1",
        "width": "100",
        "divPosition": "null",
        "uiProperties": "{\"cols\":10,\"rows\":1,\"x\":0,\"y\":3,\"maxItemRows\":1,\"minItemRows\":1,\"htmlId\":\"portfolio_summary\",\"dragEnabled\":true,\"resizeEnabled\":true,\"totalCols\":10}",
        "elementsList": [
          {
            "elementId": 112,
            "elementName": "comp_title",
            "elementDisplayPlaceHolder": "Component Title",
            "elementValue": "Gain/Loss",
            "elementCategory": "TEXT_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 115,
            "elementName": "realized",
            "elementDisplayPlaceHolder": "Realized",
            "elementValue": "null",
            "elementCategory": "CHECK_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 1
          },
          {
            "elementId": 116,
            "elementName": "unrealized",
            "elementDisplayPlaceHolder": "Unrealized",
            "elementValue": "null",
            "elementCategory": "CHECK_BOX",
            "defaultDisplay": "Y",
            "sortOrder": 2
          }
        ]
      }
    ],
    "requestId": "20200523155749916"
  }
   
           
         

export const componentData: any =
{

  	"messages": {
		"message": null
	},
	"componentsList": [
		{
			"componentName": "REPORT_HEADER",
			"componentId": 0,
			"htmlId": "report_header",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
				{
					"elementId": 101,
					"elementName": "REPORT_NAME",
					"elementDisplayPlaceHolder": "Portfolio Snapshot Summary",
					"elementValue": "Portfolio Snapshot Summary",
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 102,
					"elementName": "REPORT_TYPE",
					"elementDisplayPlaceHolder": "Combined Account Portfolio",
					"elementValue": null,
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 2
				},
				{
					"elementId": 104,
					"elementName": "PREPARED_FOR",
					"elementDisplayPlaceHolder": "PREPARED FOR",
					"elementValue": null,
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 3
				},
				{
					"elementId": 105,
					"elementName": "LOGO",
					"elementDisplayPlaceHolder": "logo",
					"elementValue": null,
					"elementCategory": "PLACEHOLDER",
					"defaultDisplay": "Y",
					"sortOrder": 4
				}
			]
		},
		{
			"componentName": "PORTFOLIO_PERFORMANCE",
			"componentId": 1,
			"htmlId": "portfolio_performance",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
				{
					"elementId": 1,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "SELECTED_PERIOD",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 2,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "QUARTER_TO_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 2
				},
				{
					"elementId": 3,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "YEAR_TO_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 3
				},
				{
					"elementId": 4,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "LAST_QUARTER",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 4
				},
				{
					"elementId": 5,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "LAST_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 5
				},
				{
					"elementId": 6,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "ONE_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 6
				},
				{
					"elementId": 7,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "THREE_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 7
				},
				{
					"elementId": 8,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "FIVE_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 8
				},
				{
					"elementId": 9,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "TEN_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 9
				},
				{
					"elementId": 10,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "SINCE_START_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 10
				},
				{
					"elementId": 11,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "MONTH_TO_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 11
				},
				{
					"elementId": 12,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "LAST_MONTH",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 12
				},
				{
					"elementId": 13,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "CALENDAR_YEAR_1",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 13
				},
				{
					"elementId": 14,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "CALENDAR_YEAR_2",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 14
				},
				{
					"elementId": 15,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "CALENDAR_YEAR_3",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 15
				},
				{
					"elementId": 106,
					"elementName": "TABLE_ROW",
					"elementDisplayPlaceHolder": "Beginning Value",
					"elementValue": null,
					"elementCategory": "ENTITY_ROW",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 107,
					"elementName": "TABLE_ROW",
					"elementDisplayPlaceHolder": "Net Contribution",
					"elementValue": null,
					"elementCategory": "ENTITY_ROW",
					"defaultDisplay": "Y",
					"sortOrder": 2
				},
				{
					"elementId": 108,
					"elementName": "TABLE_ROW",
					"elementDisplayPlaceHolder": "Change In Value",
					"elementValue": null,
					"elementCategory": "ENTITY_ROW",
					"defaultDisplay": "Y",
					"sortOrder": 3
				},
				{
					"elementId": 109,
					"elementName": "TABLE_ROW",
					"elementDisplayPlaceHolder": "Ending Value",
					"elementValue": null,
					"elementCategory": "ENTITY_ROW",
					"defaultDisplay": "Y",
					"sortOrder": 4
				},
				{
					"elementId": 110,
					"elementName": "TABLE_ROW",
					"elementDisplayPlaceHolder": "Return",
					"elementValue": null,
					"elementCategory": "ENTITY_ROW",
					"defaultDisplay": "Y",
					"sortOrder": 5
				},
				{
					"elementId": 111,
					"elementName": "TABLE_ROW",
					"elementDisplayPlaceHolder": "Benchmarks",
					"elementValue": null,
					"elementCategory": "ENTITY_ROW",
					"defaultDisplay": "Y",
					"sortOrder": 6
				},
				{
					"elementId": 112,
					"elementName": "comp_title",
					"elementDisplayPlaceHolder": "Component Title",
					"elementValue": "Portfolio Return",
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				}
			]
		},
		{
			"componentName": "PORTFOLIO_VALUE",
			"componentId": 2,
			"htmlId": "portfolio_value",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
				{
					"elementId": 112,
					"elementName": "comp_title",
					"elementDisplayPlaceHolder": "Component Title",
					"elementValue": "Portfolio Value",
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 124,
					"elementName": "PVB_CHART_RADIO1",
					"elementDisplayPlaceHolder": "BV_Investments",
					"elementValue": null,
					"elementCategory": "RADIO",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 125,
					"elementName": "PVB_CHART_RADIO1",
					"elementDisplayPlaceHolder": "Investments_Since_Inception",
					"elementValue": null,
					"elementCategory": "RADIO",
					"defaultDisplay": "N",
					"sortOrder": 1
				},
				{
					"elementId": 126,
					"elementName": "PVB_CHART_RADIO1",
					"elementDisplayPlaceHolder": "NO_INVESTMENT_LINE",
					"elementValue": null,
					"elementCategory": "RADIO",
					"defaultDisplay": "N",
					"sortOrder": 1
        },
        {
					"elementId": 124,
					"elementName": "PVB_CHART_RADIO2",
					"elementDisplayPlaceHolder": "BV_Investments",
					"elementValue": null,
					"elementCategory": "RADIO",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 125,
					"elementName": "PVB_CHART_RADIO2",
					"elementDisplayPlaceHolder": "Investments_Since_Inception",
					"elementValue": null,
					"elementCategory": "RADIO",
					"defaultDisplay": "N",
					"sortOrder": 1
				},
				{
					"elementId": 126,
					"elementName": "PVB_CHART_RADIO2",
					"elementDisplayPlaceHolder": "NO_INVESTMENT_LINE",
					"elementValue": null,
					"elementCategory": "RADIO",
					"defaultDisplay": "N",
					"sortOrder": 1
				},
				{
					"elementId": 127,
					"elementName": "PVB_CHART_DD1",
					"elementDisplayPlaceHolder": "SELECTED_PERIOD",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 128,
					"elementName": "PVB_CHART_DD1",
					"elementDisplayPlaceHolder": "SINCE_START_DATE",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "N",
					"sortOrder": 1
        },
        {
					"elementId": 127,
					"elementName": "PVB_CHART_DD2",
					"elementDisplayPlaceHolder": "SELECTED_PERIOD",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 128,
					"elementName": "PVB_CHART_DD2",
					"elementDisplayPlaceHolder": "SINCE_START_DATE",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "N",
					"sortOrder": 1
				},
				{
					"elementId": 129,
					"elementName": "PVB_CHART",
					"elementDisplayPlaceHolder": "BENCHMARK_1",
					"elementValue": null,
					"elementCategory": "FLAG",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 130,
					"elementName": "PVB_CHART",
					"elementDisplayPlaceHolder": "BENCHMARK_2",
					"elementValue": null,
					"elementCategory": "FLAG",
					"defaultDisplay": "Y",
					"sortOrder": 1
				}
			]
		},
		{
			"componentName": "ACCOUNT_PERFORMANCE",
			"componentId": 3,
			"htmlId": "account_performance",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
        {
					"elementId": 118,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "ACCOUNT_NUMBER",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 119,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "START_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 2
				},
				{
					"elementId": 120,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "VALUE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 3
				},
				{
					"elementId": 121,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "PERCENT",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 4
				},
				{
					"elementId": 1,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "SELECTED_PERIOD",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 5
				},
				{
					"elementId": 2,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "QUARTER_TO_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 5
				},
				{
					"elementId": 3,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "YEAR_TO_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 6
				},
				{
					"elementId": 4,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "LAST_QUARTER",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 9
				},
				{
					"elementId": 5,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "LAST_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 10
				},
				{
					"elementId": 6,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "ONE_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 11
				},
				{
					"elementId": 7,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "THREE_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 12
				},
				{
					"elementId": 8,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "FIVE_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 13
				},
				{
					"elementId": 9,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "TEN_YEAR",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 14
				},
				{
					"elementId": 10,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "SINCE_START_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "Y",
					"sortOrder": 15
				},
				{
					"elementId": 11,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "MONTH_TO_DATE",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 16
				},
				{
					"elementId": 12,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "LAST_MONTH",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 17
				},
				{
					"elementId": 13,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "CALENDAR_YEAR_1",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 18
				},
				{
					"elementId": 14,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "CALENDAR_YEAR_2",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 19
				},
				{
					"elementId": 15,
					"elementName": "TABLE_HEADER",
					"elementDisplayPlaceHolder": "CALENDAR_YEAR_3",
					"elementValue": null,
					"elementCategory": "TIME_PERIOD",
					"defaultDisplay": "N",
					"sortOrder": 20
				},
				{
					"elementId": 112,
					"elementName": "comp_title",
					"elementDisplayPlaceHolder": "Component Title",
					"elementValue": "Account Performance",
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 117,
					"elementName": "CHECK_BOX",
					"elementDisplayPlaceHolder": "INCLUDE_CLOSED_ACCOUNTS",
					"elementValue": null,
					"elementCategory": "CHECK_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				
				{
					"elementId": 122,
					"elementName": "AP_DROP_DOWN",
					"elementDisplayPlaceHolder": "UPTO_10_ACCOUNTS",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 123,
					"elementName": "AP_DROP_DOWN",
					"elementDisplayPlaceHolder": "ALL_ACCOUNTS",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "N",
					"sortOrder": 2
				}
			]
		},
		{
			"componentName": "ASSET_CATEGORY",
			"componentId": 4,
			"htmlId": "asset_category",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
				{
					"elementId": 112,
					"elementName": "comp_title",
					"elementDisplayPlaceHolder": "Component Title",
					"elementValue": "Asset Type",
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 113,
					"elementName": "ASTALLOC",
					"elementDisplayPlaceHolder": "ASSET_TYPE",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 114,
					"elementName": "ASTALLOC",
					"elementDisplayPlaceHolder": "INVESTMENT_STYLE",
					"elementValue": null,
					"elementCategory": "DROPDOWN",
					"defaultDisplay": "N",
					"sortOrder": 2
				}
			]
		},
		{
			"componentName": "REPORT_FOOTER",
			"componentId": 5,
			"htmlId": "report_footer",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
				{
					"elementId": 103,
					"elementName": "PREPARED_BY",
					"elementDisplayPlaceHolder": "PREPARED BY",
					"elementValue": null,
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				}
			]
		},
		{
			"componentName": "PORTFOLIO_SUMMARY",
			"componentId": 6,
			"htmlId": "portfolio_summary",
			"layoutRow": null,
			"layoutColumn": null,
			"width": null,
			"elementsList": [
				{
					"elementId": 112,
					"elementName": "comp_title",
					"elementDisplayPlaceHolder": "Component Title",
					"elementValue": "Gain/Loss",
					"elementCategory": "TEXT_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 1
				},
				{
					"elementId": 115,
					"elementName": "realized",
					"elementDisplayPlaceHolder": "Realized",
					"elementValue": null,
					"elementCategory": "CHECK_BOX",
					"defaultDisplay": "N",
					"sortOrder": 1
				},
				{
					"elementId": 116,
					"elementName": "unrealized",
					"elementDisplayPlaceHolder": "Unrealized",
					"elementValue": null,
					"elementCategory": "CHECK_BOX",
					"defaultDisplay": "Y",
					"sortOrder": 2
				}
			]
		}
	],
  "requestId": "0684d393-866f-497f-b500-017230159f4f"
}

export const PVB_CHART_OPTIONS: any = {
  chart: 
  {
    width: 600,
    height: 300,
    type : 'area',
    marginLeft : 25 ,
    marginRight : 12,
    spacingLeft : 1,
    spacingRight : 1
  },
  title: {text: ''},    
  credits: {enabled: false},
  subtitle: {    text: ''},
  yAxis: 
  {    
    title: {        text: ''    } , 
    allowDecimals : true,
    gridLineColor : '#D9D9D9',
    gridLineWidth : 0.5,
    labels : 
    {
      formatter : function() {return this.value/1000000.0},
      style : {color : '#000000' , fontSize : '11px'},
      y : 2,
    },
    min :0, 
    max : 5000000,
    offset : -10, 
    tickPixelInterval : 20 
  },
  xAxis: 
  {       
    //categories:['Q1,07','','','','Q4,07','','','','Q4,08','','','','Q4,09','','','','Q4,10','','','','Q4,11','','','','Q4,12','','','','Q4,13','','','','Q4,14','','','','Q4,15','','','Sep 19*',],      
    categories:[],      
    labels: {               style: {                        fontSize: '11px', color : '#000000',fontBold : true      },rotation : 0,step : 1, y : 12, },
    tickPositioner :function() {return [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,39,]} ,
    tickInterval:1,
    tickWidth: 0.5,
    tickmarkPlacement: 'on',
    lineColor : '#816A44',
    lineWidth : 0.50,
    tickColor : '#816A44',
    tickLength : 4,
    endOfTick : false,
  },
  legend: 
  {    
    layout: 'horizontal',        
    align: 'center',  
    itemDistance : 20 , 
    alignColumns : false,     
    verticalAlign: 'bottom',        
    itemStyle: {fontSize: '11px',},
    symbolWidth : 9.6,
    symbolRadius : 1.92,
    margin : 3 
  },
  plotOptions: 
  {    
    series: 
    {        
      label: { connectorAllowed: false }, 
      marker : {enabled : false} ,  
    },
    area :{fillOpacity : 0}, 
  },
  series: 
  [
    /*{
      name:'performanceTest',
      dashStyle:'solid',
      color:'#1a4ca0',
      lineWidth:2,
      showInLegend:true,
      data: 
      [
        114562.28,849146.33,844476.59,845664.97,820169.67,
        774561.31,758455.21,698175.67,506048.84,462798.03,
        498081.03,784081.39,789463.24,808761.01,1075819.05,
        1134157.35,1176522.97,1206313.46,1246694.43,1364204.8,
        1398890.89,1476796.65,1435257.57,1496548.42,1485284.58,
        1518950.25,1481019.26,1510572.09,1742983.5,1795233.68,
        1863044.53,1938174.77,1934126.31,2380195.76,2330941.61,
        2307718.45,2346576.47,2405630.93,2571953.81,2782050.13,
      ]
    },
    {
      name:'S&P 500',
      dashStyle:'solid',
      color:'#eaaa33',
      lineWidth:1,
      showInLegend:true,
      data: 
      [
        114562.28,848438.63,863424.4,874993.49,840126.88,
        765858.83,739809.96,672348.47,488359.34,409574.55,
        440358.35,730170.05,756019.41,794337.88,967445.36,
        1092931.6,1224348.0,1277463.1,1308396.79,1324265.38,
        1480111.63,1678310.38,1617655.52,1721442.88,1692089.71,
        1869877.62,1889512.61,1979936.58,2400648.91,2472087.86,
        2592490.02,2710346.63,2834272.98,3342948.02,3355243.57,
        3315770.97,3655940.45,3763373.6,3854317.13,4104682.43,
      ]
    },
    {
      name:'Citigroup 1 month CD',
      dashStyle:'solid',
      color:'#777777',
      lineWidth:1,
      showInLegend:true,
      data: 
      [
        114562.28,859422.1,832370.17,837975.53,842916.17,
        854294.1,854524.66,854045.34,822953.02,798781.81,
        765580.87,981035.7,963961.99,961954.98,1240653.35,
        1256796.5,1270044.56,1251932.4,1281629.94,1487095.12,
        1486931.03,1498871.41,1485239.87,1487213.43,1464731.53,
        1463730.13,1429863.52,1421883.82,1626323.05,1654744.86,
        1646426.73,1736411.12,1728816.23,2209630.2,2213719.57,
        2396585.51,2500747.89,2555358.72,2554620.53,2714540.59,
      ]
    },
    {
      name:'BEGINNING VALUE + INVESTMENTS',
      dashStyle:'Dash',
      color:'#000000',
      lineWidth:1,
      showInLegend:false,
      data: [
        114562.27984449844,848984.2498444985,811114.5698444985,805288.1898444985,799594.2298444986,
        803055.4598444985,797511.6198444986,791600.3398444986,738853.0198444986,713766.4998444986,
        679847.4298444986,894725.0998444986,878421.4698444986,876029.8898444986,1155751.5498444985,
        1171010.6098444986,1183536.6998444987,1165266.0298444987,1194359.5498444987,1399168.259844499,
        1398219.079844499,1409378.569844499,1394961.019844499,1396226.549844499,1373361.879844499,
        1371698.4998444992,1337240.5698444992,1328679.4098444993,1532476.5998444993,1559873.0398444992,
        1550885.5498444992,1640213.3998444993,1631358.4198444993,2111462.699844499,2114660.819844499,
        2296554.619844499,2399702.429844499,2453841.729844499,2452079.2398444987,2611040.29,
      ]
    },
    {
      type:'line',
      name:'BEGINNING VALUE + INVESTMENTS',
      color:'#000000',
      dashStyle: 'Dash',
      lineWidth: 1,
      showInLegend: true,
      data: [],
      marker : {enabled : false}
    },*/
  ],
  /*responsive: 
  {    
    rules: 
    [
      {        
        condition: { maxWidth: 200},        
        chartOptions: 
        {            
          legend: 
          {                
            layout: 'horizontal',                
            align: 'center', 
            itemDistance : 20,                
            verticalAlign: 'bottom'            
          }        
        }    
      }
    ]
  }*/
};