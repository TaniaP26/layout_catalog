report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 11.192114042605288,
          "misMatchPercentage": "11.19",
          "analysisTime": 274
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Entire_document_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 9.508814887365329,
          "misMatchPercentage": "9.51",
          "analysisTime": 262
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Entire_document_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.006510416666666667,
          "misMatchPercentage": "0.01",
          "analysisTime": 60
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 6.436111111111111,
          "misMatchPercentage": "6.44",
          "analysisTime": 57
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Header_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -352,
            "height": -87
          },
          "rawMisMatchPercentage": 2.8290681351905844,
          "misMatchPercentage": "2.83",
          "analysisTime": 74
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 0
          },
          "rawMisMatchPercentage": 12.746443089430896,
          "misMatchPercentage": "12.75",
          "analysisTime": 38
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.13513513513513514,
          "misMatchPercentage": "0.14",
          "analysisTime": 9
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.13513513513513514,
          "misMatchPercentage": "0.14",
          "analysisTime": 7
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Main_tag_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -780
          },
          "rawMisMatchPercentage": 4.23309326171875,
          "misMatchPercentage": "4.23",
          "analysisTime": 125
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Main_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Main_tag_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -968,
            "height": -780
          },
          "rawMisMatchPercentage": 3.6122395833333334,
          "misMatchPercentage": "3.61",
          "analysisTime": 148
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Main_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 67
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 53
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 56
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 33
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 49
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 58
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 46
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.75857843137255,
          "misMatchPercentage": "15.76",
          "analysisTime": 51
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 31
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 84
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 76
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 38
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 42
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 76
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 58
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20241209-192552\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 15.759803921568627,
          "misMatchPercentage": "15.76",
          "analysisTime": 37
        },
        "diffImage": "..\\bitmaps_test\\20241209-192552\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    }
  ]
});