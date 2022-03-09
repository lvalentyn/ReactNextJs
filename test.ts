let a: number = 4
let b: string = 'word'
let c = true
let e: any = 3

let d: string[] = ['asdas', 'asdasd', 'asdasd']

function test(a: string): string | number {
	return ''
}

const test2 = (a: number): void => {
	return
}

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number, long?: number }) {

}

function printIt(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString());
	} else if (typeof id === 'string') {
		id.toUpperCase()
	}
}

function getSum(a: number | number[]) {
	if (Array.isArray(a)) {
	}
}

const x: undefined = undefined
const z: null = null