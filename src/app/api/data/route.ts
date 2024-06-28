import {MainDataType} from "@/app/definitions/api";

let mock: MainDataType = {
  name: 'Клеков Марк Владиславович',
  counter: 200
}

export async function GET() {
  return new Response(JSON.stringify(mock))
}

export async function POST() {
  mock = {
    ...mock,
    counter: mock.counter + 1
  }

  return new Response(JSON.stringify(mock))
}