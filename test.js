"use strict";
// let a: number = 4
// let b: string = 'word'
// let c = true
// let e: any = 3
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let d: string[] = ['asdas', 'asdasd', 'asdasd']
// function test(a: string): string | number {
// 	return ''
// }
// const test2 = (a: number): void => {
// 	return
// }
// d = d.map((x: string) => x.toLowerCase())
// function countCoord(coord: { lat: number, long?: number }) {
// }
// function printIt(id: number | string) {
// 	if (typeof id === 'number') {
// 		console.log(id.toString());
// 	} else if (typeof id === 'string') {
// 		id.toUpperCase()
// 	}
// }
// function getSum(a: number | number[]) {
// 	if (Array.isArray(a)) {
// 	}
// }
// const x: undefined = undefined
// const z: null = null
// // -----------
// type Point = {
// 	x: number,
// 	y: number
// }
// type D3Point = Point & {
// 	z: number
// }
// interface IPoint {
// 	x: number,
// 	y: number
// }
// interface I3DPoint extends IPoint {
// 	z: number
// }
// type stringOrNumber = string | number
// const v = (point: IPoint) => {
// 	const d: I3DPoint = point as I3DPoint
// }
// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
// function print(coord: stringOrNumber) {
// }
// interface ITest {
// 	a: number
// }
// interface Test {
// 	b: number
// }
// interface Info {
// 	descr: string,
// 	isActive: boolean,
// }
// interface Tag {
// 	name: string,
// 	value: number,
// }
// interface Reply {
// 	userId: number,
// 	id: number,
// 	title: string,
// 	info: Info,
// 	tags: Tag[],
// }
// 3.06
// let c: 'test' = 'test';
// type actionType = 'up' | 'down';
// function performAction(action: actionType | ComplexAction) {
// 	switch (action) {
// 		case 'down':
// 			return -1;
// 		case 'up':
// 			return 1;
// 	}
// }
// interface ComplexAction {
// 	s: string;
// }
// 3.07
// enum Direction {
// 	Up = 'UP',
// 	Down = 'Down',
// 	Left = 'Left',
// 	Right = 'Right'
// }
// enum Decition {
// 	Yes = 1,
// 	No = calcEnum()
// }
// function calcEnum() {
// 	return 2
// }
// function runEnum(obj: { Up: string }) {
// }
// runEnum(Direction)
// enum Test {
// 	A
// }
// let test = Test.A;
// let nameA = Test[test]
// const enum ConstEnum {
// 	A,
// 	B
// }
// let c = ConstEnum.A
// enum Dice {
// 	One = 1,
// 	Two,
// 	Tree
// }
// function ruDice(dice: Dice) {
// 	switch (dice) {
// 		case Dice.One:
// 			return 'odin';
// 		case Dice.Two:
// 			return 'dva';
// 		case Dice.Tree:
// 			return 'tri';
// 		default:
// 			const a: never = dice;
// 	}
// }
// 3.08
// const a: [number, string, number] = [0, 'a', 1]
// 3.09
// function logTime<T>(num: T): T {
// 	console.log(new Date());
// 	return num
// }
// function logTimeA<T>(num: T): T {
// 	console.log(new Date());
// 	if (typeof num == 'string') {
// 		num.toLocaleLowerCase();
// 	}
// 	return num
// }
// logTime<string>('asd')
// interface MyInterface {
// 	transform: <T, F>(a: T) => F
// }
// class MyGenClass<T> {
// 	value: T
// }
// const a = new MyGenClass<number>()
// a.value
// interface TimeStamp {
// 	stamp: number;
// }
// function logTimeStamp<T extends TimeStamp>(num: T): T {
// 	console.log(num.stamp)
// 	return num;
// }
// 3.10
const react_1 = __importDefault(require("react"));
const a = react_1.default.createElement("div", { tabIndex: 0 },
    react_1.default.createElement("span", null, 1 + 1));
const b = react_1.default.createElement('div', { tabIndex: 0 }, 1 + 1);
