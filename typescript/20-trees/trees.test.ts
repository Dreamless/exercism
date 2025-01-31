import { describe, it, expect } from '@jest/globals'
import {exampleTree, bfs} from "./trees.js"


describe('Trees', () => {
  it('create tree', () => {
    const expected: number[] = [1,2,3,4,5,6,7,8,9,6]
    expect(bfs(exampleTree)).toEqual(expected)
  })
})
