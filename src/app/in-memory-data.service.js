"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            {
                id: 1,
                "group": "",
                "position": 0,
                name: "Hydrogen",
                "number": 1,
                "small": "H",
                "molar": 1.00794,
                "electrons": [
                    1
                ]
            },
            {
                "id": 2,
                "group": "Element Noble p",
                "position": 17,
                "name": "Helium",
                "number": 2,
                "small": "He",
                "molar": 4.002602,
                "electrons": [
                    2
                ]
            },
            {
                "id": 3,
                "group": "Element Alkali s",
                "position": 0,
                "name": "Lithium",
                "number": 3,
                "small": "Li",
                "molar": 6.941,
                "electrons": [
                    2,
                    1
                ]
            },
            {
                "id": 4,
                "group": "Element Alkaline s",
                "position": 1,
                "name": "Beryllium",
                "number": 4,
                "small": "Be",
                "molar": 9.012182,
                "electrons": [
                    2,
                    2
                ]
            },
            {
                "id": 5,
                "group": "Element Metalloid Boron p",
                "position": 12,
                "name": "Boron",
                "number": 5,
                "small": "B",
                "molar": 10.811,
                "electrons": [
                    2,
                    3
                ]
            },
            {
                "id": 6,
                "group": "Element Nonmetal Carbon p",
                "position": 13,
                "name": "Carbon",
                "number": 6,
                "small": "C",
                "molar": 12.0107,
                "electrons": [
                    2,
                    4
                ]
            },
            {
                "id": 7,
                "group": "Element Nonmetal Pnictogen p",
                "position": 14,
                "name": "Nitrogen",
                "number": 7,
                "small": "N",
                "molar": 14.0067,
                "electrons": [
                    2,
                    5
                ]
            },
            {
                "id": 8,
                "group": "Element Nonmetal Chalcogen p",
                "position": 15,
                "name": "Oxygen",
                "number": 8,
                "small": "O",
                "molar": 15.9994,
                "electrons": [
                    2,
                    6
                ]
            },
            {
                "id": 9,
                "group": "Element Halogen p",
                "position": 16,
                "name": "Fluorine",
                "number": 9,
                "small": "F",
                "molar": 18.998404,
                "electrons": [
                    2,
                    7
                ]
            },
            {
                "id": 10,
                "group": "Element Noble p",
                "position": 17,
                "name": "Neon",
                "number": 10,
                "small": "Ne",
                "molar": 20.1797,
                "electrons": [
                    2,
                    8
                ]
            }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map