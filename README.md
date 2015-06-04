# ttl-engineering

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

#UI Developer Technical Exercise

Using the supplied live departure board data (ldb.json), create a web page that faithfully reproduces the mock-up (see mockup.png).

We expect you to test drive your code, ensuring data integrity and consistent mark-up generation.

###ldb.json

```javascript
{
    "journey": {
        "origin": "London Euston",
        "destination": "Manchester Piccadilly",
        "scheduled": "14:00"
    },
    "callingPoints": [
        {
            "station": "London Euston",
            "scheduled": "14:00",
            "expected": "14:00",
            "actual": "14:00",
            "platform": ""
        },
        {
            "station": "Stoke-On-Trent",
            "scheduled": "15:25",
            "expected": "15:35",
            "actual": "15:35",
            "platform": "2"
        },
        {
            "station": "Macclesfield",
            "scheduled": "15:41",
            "expected": "15:50",
            "platform": "1"
        },
        {
            "station": "Stockport",
            "scheduled": "15:56",
            "expected": "16:03",
            "platform": "3"
        },
        {
            "station": "Manchester Piccadilly",
            "scheduled": "16:07",
            "expected": "16:11",
            "platform": "7"
        }
    ]
}
```

###mockup.png

![mockup.png](https://bytebucket.org/ttl-engineering/recruitment_test_webdev/raw/d48db490ba18aeff1ce257aa6103d1cb72dcd98b/mockup.png?token=a4d1987725e9dd4ffea165d06559cc6a1c4715a6)