import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryChurchData implements InMemoryDbService {
    createDb() {
        // Dashboard
        let offeringByWeekly = [
            { data: [2000, 1500, 2500, 2100], label: 'ContractOffering' },
            { data: [500, 400, 550, 650], label: 'ThanksOffering' },
            { data: [3000, 3500, 4000, 3300], label: 'Offering' }
        ];

        let offeringByMonthly = [
            { data: [6000, 5000, 7500, 7000], label: 'ContractOffering' },
            { data: [2000, 1500, 1100, 2500], label: 'ThanksOffering' },
            { data: [10000, 9500, 1200, 11000], label: 'Offering' }
        ];

        let familyStat = [
            { data: [1, 2, 5, 1, 2, 3], label: 'Registered Families' },
            { data: [4, 7, 14, 2, 3, 8], label: 'Registered Family Members' },
            { data: [1, 3, 2, 1, 5, 1], label: 'Move Out' }
        ];
        //Code
        let states = [
            {
                "state": "CA",
                "stateName": "California"
            },
            {
                "state": "NY",
                "stateName": "New York"
            },
            {
                "state": "WA",
                "stateName": "Washington"
            }
        ];
        let countries = [
            {
                "countryCode": "KR",
                "country": "Korea"
            },
            {
                "countryCode": "USA",
                "country": "United State"
            },
            {
                "countryCode": "UK",
                "country": "United Kingtom"
            }
        ];

        let regions = [
            {
                "regionId": 1,
                "region": "Bothell"
            },
            {
                "regionId": 2,
                "region": "Seattle"
            },
            {
                "regionId": 3,
                "region": "Everret"
            }
        ];

        let subregions = [
            {
                "subregionId": 1,
                "regionId": 1,
                "subregion": "Bothell1"
            },
            {
                "subregionId": 2,
                "regionId": 1,
                "subregion": "Bothell2"
            },
            {
                "subregionId": 3,
                "regionId": 2,
                "subregion": "Seattle1"
            },
            {
                "subregionId": 4,
                "regionId": 2,
                "subregion": "Seattle2"
            },
            {
                "subregionId": 5,
                "regionId": 3,
                "subregion": "Everret1"
            },
            {
                "subregionId": 6,
                "regionId": 3,
                "subregion": "Everret2"
            }

        ];
        let relations = [
            {
                "relationId": 1,
                "relationName": "Self"
            },
            {
                "relationId": 2,
                "relationName": "Wife"
            },
            {
                "relationId": 3,
                "relationName": "Son"
            }
        ];

        // family  
        let families = [{
            'id': 1160,
            'householderName': 'KyungHee Kim',
            'name': '김경희',
            'englishFirstName': 'KyungHee',
            'englishLastName': 'Kim',
            'baptismName': 'YY',
            'gender': 'female',
            'relation': '본인',
            'address1': '5716 25th SE',
            'city': 'Lynnwood',
            'state': 'WA',
            'zipcode': '98012',
            'homePhone': '516-375-5060',
            "address2": "",
            "country": "USA",
            "workPhone": "516-111-1111",
            "cellPhone": "11111111111",
            "faxNumber": "516-111-1112",
            "region": 1,
            "subregion": 1,
            "createdDate": "12/01/2016",
            "lastUpdatedDate": "12/20/2016"
        },
        {
            'id': 1161,
            'householderName': 'Ok Hee Kim',
            'name': '',
            'englishFirstName': 'Ok',
            'englishLastName': 'Kim',
            'baptismName': 'Teresa',
            'gender': 'female',
            'relation': '배우자',
            'address1': '19214 25th Ave. SE',
            'city': 'Bothell',
            'state': 'WA',
            'zipcode': '98012',
            'homePhone': '516-375-5060',
            "address2": "",
            "country": "USA",
            "workPhone": "516-111-1111",
            "cellPhone": "11111111111",
            "faxNumber": "516-111-1112",
            "region": 1,
            "subregion": 1,
            "createdDate": "12/01/2016",
            "lastUpdatedDate": "12/20/2016"
        }
        ];

        let memberGeneral = [{
            "id": 439,
            "englishLastName": "Paik",
            "englishFirstName": "JongHyun",
            "koreanLastName": "백",
            "koreanFirstName": "종현",
            "baptismName": "Stephano",
            "birthDate": "1969-07-23",
            "birthPlace": "Seoul",
            "baptizedDate": "12/2/1992",
            "confirmationDate": "12/2/1999",
            "marriedDate": "10/8/2001",
            "gender": "male",
            "relation": 1,
            "occupation": "programmer",
            "createdDate": "2005/01/01",
            "lastUpdatedDate": "2005/10/01"
        },
        {
            "id": 440,
            "englishLastName": "Kim",
            "englishFirstName": "Ok",
            "koreanLastName": "김",
            "koreanFirstName": "옥",
            "baptismName": "Teresha",
            "birthDate": "1973-12-02",
            "birthPlace": "Seoul",
            "baptizedDate": "12/2/1992",
            "confirmationDate": "12/2/1999",
            "marriedDate": "10/8/2001",
            "gender": "female",
            "relation": 2,
            "occupation": "programmer",
            "createdDateTime": "2005/01/01",
            "lastUpdatedDateTme": "2005/1001"
        }

        ];



        return { offeringByWeekly, offeringByMonthly, familyStat, states, countries, regions, subregions, relations, families, memberGeneral };
    }
}