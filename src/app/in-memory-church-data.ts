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
            'householderName': 'Ok Kim',
            'name': '배우자',
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
            "lastUpdatedDate": "12/20/2016",
            "familyMember":[
            {
                "id": 1,
                "englishLastName": "Paik",
                "englishFirstName": "JongHyun",
                "koreanLastName": "백",
                "koreanFirstName": "종현",
                "baptismName": "Stephano",
                "sex": "M",
                "relation": {"id": 1, "name": "본인"},
                "birthDate": "07/23/1969",
                "baptizedDate": "12/2/2001",
                "confirmationDate": "12/2/2002",
                "marriedDate":"10/8/2005",
                "generalInformation" : {
                    "personalId": 439,
                    "englishLastName": "Paik",
                    "englishFirstName": "JongHyun",
                    "koreanLastName": "백",
                    "koreanFirstName": "종현",
                    "birthDate": "07/23/1969",
                    "birthPlace":"Seoul",
                    "sex": "M",
                    "relation": {"id": 1, "name": "본인"},
                    "occupation":"programmer",
                    "status":1,
                    "statusDate":"12/2/2011",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                },
                "baptismInformation":{
                    "personalId":439,
                    "baptismId":1220,
                    "engBaptismName": "Stephano",
                    "koreanBaptismName": "스테파노",
                    "baptizedDate": "07/23/1990",
                    "baptizedChurch":"SadangDong Church",
                    "firstCommunion":true,
                    "priest":"Father A",
                    "father":"백병기",
                    "mother":"강삼숙",
                    "godFather":"요셉",
                    "godMother":"",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                },
                "confirmationInformation":{
                    "personalId":439,
                    "confirmationId":810,
                    "confirmationDate": "07/23/2000",
                    "confirmationChurch":"SadangDong Church",
                    "priestId":1,
                    "priest":"Father A",
                    "father":"백병기",
                    "mother":"강삼숙",
                    "godFather":"요셉",
                    "godMother":"",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                },
                "maritalInformation":{
                    "personalId":439,
                    "maritalId":288,
                    "marriedDate": "07/23/2000",
                    "marriedChurch":"SadangDong Church",
                    "priest":"Father B",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                }
                },
                {
                "id": 2,
                "englishLastName": "Kim",
                "englishFirstName": "Ok",
                "koreanLastName": "김",
                "koreanFirstName": "옥",
                "baptismName": "Teresha",
                "sex": "F",
                "relation": {"id": 2, "name": "아내"},
                "birthDate": "12/02/1973",
                "baptizedDate": "12/2/1992",
                "confirmationDate": "12/2/1999",
                "marriedDate":"10/8/2001",
                "generalInformation" : {
                    "personalId": 440,
                    "englishLastName": "Kim",
                    "englishFirstName": "Ok",
                    "koreanLastName": "김",
                    "koreanFirstName": "옥",
                    "birthDate": "12/02/1973",
                    "birthPlace":"Seoul",
                    "sex": "F",
                    "relation": {"id": 2, "name": "아내"},
                    "occupation":"programmer",
                    "status":1,
                    "statusDate":"12/2/2011",
                    "createdDateTime": "21050101",
                    "lastedUpdatedDateTme": "21051001"
                },
                "baptismInformation":{
                    "personalId": 440,
                    "baptismId":555,
                    "engBaptismName": "Teresha",
                    "koreanBaptismName": "소화 데레사",
                    "baptizedDate": "12/23/2002",
                    "baptizedChurch":"Bayside Church",
                    "firstCommunion":true,
                    "priest":"Father A",
                    "father":"김운영",
                    "mother":"조병년",
                    "godFather":"",
                    "godMother":"마리아",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                },
                "confirmationInformation":{
                    "personalId": 440,
                    "confirmationId":777,
                    "confirmationDate": "12/23/2002",
                    "confirmationChurch":"Bayside Church",
                    "priest":"Father A",
                    "father":"김운영",
                    "mother":"조병년",
                    "godFather":"",
                    "godMother":"마리아",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                },
                "maritalInformation":{
                    "personalId": 440,
                    "maritalId":878,
                    "marriedDate": "10/09/1999",
                    "marriedChurch":"Bayside Church",
                    "priest":"Father B",
                    "createdDate": "21050101",
                    "lastedUpdatedDate": "21051001"
                }
                }                
            ]

        },
        {
            'id': 1526,
            'householderName': 'Okhee Kim',
            'name': '본인',
            'englishFirstName': 'Okhee',
            'englishLastName': 'Kim',
            'baptismName': 'Julia',
            'gender': 'male',
            'relation': '본인',
            'address1': '29214 25th Ave. SE',
            'city': 'Bothell',
            'state': 'WA',
            'zipcode': '98012',
            'homePhone': '222-375-5060'
        },
        {
            'id': 1500,
            'householderName': 'JongHyun Paik',
            'name': '본인',
            'englishFirstName': 'JongHyun',
            'englishLastName': 'Paik',
            'baptismName': 'Steve',
            'gender': 'male',
            'relation': '본인',
            'address1': '1576 182',
            'city': 'Lynnwood',
            'state': 'WA',
            'zipcode': '98012',
            'homePhone': '222-375-5060'
        },
        {
            'id': 1400,
            'householderName': 'Jay Park',
            'name': '본인',
            'englishFirstName': 'Jay',
            'englishLastName': 'Paark',
            'baptismName': 'Paul',
            'gender': 'male',
            'relation': '본인',
            'address1': '1576 182',
            'city': 'Lynnwood',
            'state': 'WA',
            'zipcode': '98012',
            'homePhone': '222-375-5060'
        }
        ];
        
        return { offeringByWeekly, offeringByMonthly, familyStat, states, countries, regions, subregions, relations, families };
    }
}